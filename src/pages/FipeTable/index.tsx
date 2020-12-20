import {Center, Container, Form, SectionContainer, Text} from './styles';
import React, {memo, useState} from 'react';

import {Creators as BrandActions} from '../../store/ducks/brands';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Logo from '../../assets/Icons/Logo';
import {Creators as ModelActions} from '../../store/ducks/models';
import { ReduxState } from "../../types/ReduxState";
import SafeCenterContainer from '../../components/SafeCenterContainer';
import { ScrollView } from 'react-native-gesture-handler';
import {Creators as ValueActions} from '../../store/ducks/value';
import {
  View,
} from 'react-native';
import {Creators as YearsActions} from '../../store/ducks/years';
import { useMappedActions } from "../../utils/useMappedActions";
import { useMappedState } from "redux-react-hook";
import { useOnMount } from "../../utils/useOnMount";

export interface Props {}

const mapState = (state: ReduxState) => ({
  brands: state.brands.data,
  models: state.models.data,
  years: state.years.data,
  value: state.value.data,
});

const mapActions = {
  getBrands: BrandActions.requestBrands,
  getModels: ModelActions.requestModels,
  getYears: YearsActions.requestYears,
  getValue: ValueActions.requestValue,
};

const Hello: React.FC<Props> = memo(() => {
  const { brands, models, years, value = {}} = useMappedState(mapState) || {};
  const { getBrands, getModels, getYears, getValue } = useMappedActions(mapActions);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useOnMount(() => {
    getBrands();
  });

  const handleBrand = async (b) => {
    await setBrand(b);
    await getModels({brandId: b});
  };

  const handleModel = async (m) => {
    await setModel(m);
    await getYears({brandId: brand, modelId: m});
  };

  const handleYear = async (y) => {
    await setYear(y);
  };

  const handleValue = async () => {
    await setLoading(true);
    await getValue({
      brandId: brand,
      modelId: model,
      year
    });
    await setLoading(false);
    await setShowResult(true);
  };

  const valid = brand && model && year;

  return (
    <SafeCenterContainer>
        <Container>
          <Form>
            <ScrollView>
              <Center>
                <Logo size={200} />
              </Center>
              <View>
                <Text bold title>Tabela Fipe</Text>
                <Text>Consulte o valor de um veículo de forma gratuita</Text>
              </View>

              {value && showResult ? (
                <SectionContainer>
                  <Text bold title align="left">
                    Valor: <Text>{value.Valor}</Text>
                  </Text>
                  <Text bold title align="left">
                    Marca: <Text>{value.Marca}</Text>
                  </Text>
                  <Text bold title align="left">
                    Modelo: <Text>{value.Modelo}</Text>
                  </Text>
                  <Text bold title align="left">
                    Ano: <Text>{value.AnoModelo}</Text>
                  </Text>
                  <Text bold title align="left">
                    Combustível: <Text>{value.Combustivel}</Text>
                  </Text>
                  <Text bold title align="left">
                    Código Fipe: <Text>{value.CodigoFipe}</Text>
                  </Text>
                  <Text bold title align="left">
                    Mês Referência: <Text>{value.MesReferencia}</Text>
                  </Text>
                  <Text bold title align="left">
                    Tipo de Veículo: <Text>{value.TipoVeiculo}</Text>
                  </Text>
                  <Text bold title align="left">
                    Sigla: <Text>{value.SiglaCombustivel}</Text>
                  </Text>

                  <View>
                    <Button loading={false} disabled={!valid} label="Voltar" onPress={() => setShowResult(false)} />
                  </View>
                </SectionContainer>
              )
              : (
                <View>
                  <View>
                    <Dropdown
                      label="Marcas"
                      items={brands.map(b => {return {label: b.nome, value: b.codigo}})}
                      onChangeItem={(i) => handleBrand(i)}
                    />
                  </View>
                  <View>
                    <Dropdown
                      label="Modelos"
                      items={models.map(b => {return {label: b.nome, value: b.codigo}})}
                      onChangeItem={(i) => handleModel(i)}
                    />
                  </View>
                  <View>
                    <Dropdown
                      label="Anos"
                      items={years.map(b => {return {label: b.nome, value: b.codigo}})}
                      onChangeItem={(i) => handleYear(i)}
                    />
                  </View>
                  <View pointerEvents={valid ? 'auto' : 'none'}>
                    <Button loading={loading} disabled={!valid} label="Consultar preço" onPress={() => handleValue()} />
                  </View>
                </View>
               )
              }
            </ScrollView>
          </Form>
        </Container>
    </SafeCenterContainer>
  );
});

export default Hello;
