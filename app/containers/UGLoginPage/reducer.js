/**
 * Created by Yang on 28/10/16.
 */

import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  LOAD_LOGINERROR,
} from './constants';
import {
  LOAD_LOGINSUCCESS,
} from '../App/constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('username', action.name);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    case LOAD_LOGINERROR:
      return state
        .set('error', action.error)
        .set('redirect', false);
    case LOAD_LOGINSUCCESS:
      return state
        .set('error', '')
        .set('loginSuccessRedirect', true);
    default:
      return state;
  }
}

export default loginReducer;
