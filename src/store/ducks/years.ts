import { createActions, createReducer } from 'reduxsauce';

import { Year } from '../types/Year';

// Actions Types and creators
export const { Types, Creators } = createActions({
  retrieveYears: ['data'],
  requestYears: ['data'],
  requestYearsSuccess: [''],
  requestYearsFailure: [''],
});

// Typed
export type State = {
  readonly data: Year[];
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
    [Types.RETRIEVE_YEARS]: retrieve,
  }
);
