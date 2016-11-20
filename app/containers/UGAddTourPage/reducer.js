/**
 * Created by Yang on 28/10/16.
 */

import {
  CHANGE_TOURNAME,
  CHANGE_DESTCITY,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
});

function addTourReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOURNAME:
      return state
        .set('username', action.name);
    case CHANGE_DESTCITY:
      return state
        .set('password', action.password);
    default:
      return state;
  }
}

export default addTourReducer;
