import {Types, Creators as YearsActions} from '../ducks/years'
import { all, call, put, takeLatest, } from 'redux-saga/effects';

import api from '../../api';

export function* getYears(payload) {
  try {
    const {data: requestData} = payload;
    const {brandId, modelId} = requestData;

    const response = yield call(api.get, `carros/marcas/${brandId}/modelos/${modelId}/anos`);
    const {data} = response;

    yield put(YearsActions.retrieveYears(data));

  } catch (error) {
    yield put(YearsActions.requestYearsFailure());
  }
}

export default all([takeLatest(Types.REQUEST_YEARS, getYears)]);
