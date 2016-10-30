/**
 * Created by Yang on 28/10/16.
 */

import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';
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
    default:
      return state;
  }
}

export default loginReducer;
