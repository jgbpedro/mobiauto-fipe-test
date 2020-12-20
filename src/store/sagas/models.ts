import {Creators as ModelsActions, Types} from '../ducks/models'
import { all, call, put, takeLatest, } from 'redux-saga/effects';

import api from '../../api';

export function* getModels(payload) {
  try {
    const {data: requestData} = payload;
    const {brandId} = requestData;

    const response = yield call(api.get, `carros/marcas/${brandId}/modelos`);

    const {data} = response;
    const {modelos} = data;
    yield put(ModelsActions.retrieveModels(modelos));

  } catch (error) {
    yield put(ModelsActions.requestModelsFailure());
  }
}

export default all([takeLatest(Types.REQUEST_MODELS, getModels)]);