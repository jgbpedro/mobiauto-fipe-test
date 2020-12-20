import { createActions, createReducer } from 'reduxsauce';

import { Brand } from '../types/Brand';

// Actions Types and creators
export const { Types, Creators } = createActions({
  retrieveBrands: ['data'],
  requestBrands: [''],
  requestBrandsSuccess: [''],
  requestBrandsFailure: [''],
});

// Typed
export type State = {
  readonly data: Brand[];
};


// Reducers handlers
const INITIAL_STATE: State =
  {
    data: [],
  }
;

const retrieve = (state: any = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
  }
}


// Reducer
export default createReducer(INITIAL_STATE,
  {
    [Types.RETRIEVE_BRANDS]: retrieve,
  }
);
