/**
 * Created by Yang on 28/10/16.
 */

import {
  TOGGLE_ATTENDENT_MODAL,
  TOGGLE_ATTENDENT_MODAL_STATEKEY,
  CUTTENT_TOUR_ATTEND_MODAL_STATEKEY,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  displayAttendList: false,
  currentTourAttendModal: '',
});

function tourListReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ATTENDENT_MODAL:
      return state.set(TOGGLE_ATTENDENT_MODAL_STATEKEY + action.tourId + action.attendantType, action.toggle);
    default:
      return state;
  }
}

export default tourListReducer;
