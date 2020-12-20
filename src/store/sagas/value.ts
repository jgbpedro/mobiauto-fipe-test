import {Types, Creators as ValueActions} from '../ducks/value'
import { all, call, put, takeLatest, } from 'redux-saga/effects';

import api from '../../api';

export function* getValue(payload) {
  const {data: requestData} = payload;
  const {brandId, modelId, year} = requestData;
  try {
    const response = yield call(api.get, `carros/marcas/${brandId}/modelos/${modelId}/anos/${year}`);
    const {data} = response;
    yield put(ValueActions.retrieveValue(data));

  } catch (error) {
    yield put(ValueActions.requestValueFailure());
  }
}

export default all([takeLatest(Types.REQUEST_VALUE, getValue)]);