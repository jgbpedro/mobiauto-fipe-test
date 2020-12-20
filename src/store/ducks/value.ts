import { createActions, createReducer } from 'reduxsauce';

import { Value } from '../types/Value';

// Actions Types and creators
export const { Types, Creators } = createActions({
  retrieveValue: ['data'],
  requestValue: ['data'],
  requestValueSuccess: [''],
  requestValueFailure: [''],
});

// Typed
export type State = {
  readonly data: Value;
};


// Reducers handlers
const INITIAL_STATE: State =
  {
    data: null,
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
    [Types.RETRIEVE_VALUE]: retrieve,
  }
);
