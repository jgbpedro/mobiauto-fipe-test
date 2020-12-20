import {Creators as BrandActions, Types} from '../ducks/brands'
import { all, call, put, takeLatest, } from 'redux-saga/effects';

import api from '../../api';

export function* getBrands() {
  try {
    const response = yield call(api.get, 'carros/marcas');
    const {data} = response;
    yield put(BrandActions.retrieveBrands(data));

  } catch (error) {
    yield put(BrandActions.requestBrandsFailure());
  }
}

export default all([takeLatest(Types.REQUEST_BRANDS, getBrands)]);