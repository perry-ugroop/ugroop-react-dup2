/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { LOAD_LOGINSUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LOGINSUCCESS:
      return state.set('currentUser', action.result);
    default:
      return state;
  }
}

export default appReducer;
