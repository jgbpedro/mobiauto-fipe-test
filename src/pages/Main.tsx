import React, {memo} from 'react';

import {
  Dimensions,
} from 'react-native';
import Logo from '../assets/Icons/Logo';
import SafeCenterContainer from '../components/SafeCenterContainer';
import { useOnMount } from "../utils/useOnMount";

export interface Props {
  navigation: object;
}

const Main: React.FC<Props> = memo((props) => {
  useOnMount(() => {
    const {navigation} = props;
    const {navigate} = navigation;

    setTimeout(async () => {
      navigate('FipeTable');
    }, 2000);
  });



  return (
    <SafeCenterContainer>
      <Logo size={Dimensions.get("screen").width - 100} />
    </SafeCenterContainer>
  );
});

export default Main;
