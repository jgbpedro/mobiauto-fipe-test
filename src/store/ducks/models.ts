import { createActions, createReducer } from 'reduxsauce';

import { Model } from './../types/Model';

// Actions Types and creators
export const { Types, Creators } = createActions({
  retrieveModels: ['data'],
  requestModels: ['data'],
  requestModelsSuccess: [''],
  requestModelsFailure: [''],
});

// Typed
export type State = {
  readonly data: Model[];
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
    [Types.RETRIEVE_MODELS]: retrieve,
  }
);
