import brands from './brands';
import { combineReducers } from 'redux';
import models from './models';
import value from './value';
import years from './years';

const reducers = combineReducers({
  brands,
  models,
  years,
  value,
});

export default reducers;
