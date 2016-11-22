/**
 * Created by Yun on 21/11/16.
 */

import {
  CHANGE_TOURNAME,
  TOURNAME_FIELD,
  CHANGE_DESTCITY,
  DESTCITY_FIELD,
  VALIDATE_DATE,
  VALIDATE_FIELD,
  ADDTOUR_STATEKEY,
  ADDTOURERROR_STATEKEY,
} from './constants';
import { fromJS } from 'immutable';
import messages from './messages';
import { isEmptyString } from '../../utils/stringAdditions';

// The initial state of the App
const initialState = fromJS({
  addTourState: fromJS({
    tourName: '',
    destCity: '',
    departDate: '',
    arrivalDate: '',
    participantFlag: '',
    tourDesc: '',
    tourPhoto: '',
  }),
  addTourStateError: fromJS({
    tourNameError: '',
    destCityError: '',
    departDateError: '',
    arrivalDateError: '',
    participantFlagError: '',
    tourDescError: '',
    tourPhotoError: '',
  }),
});

function addTourReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOURNAME:
      return state
        .setIn([ADDTOUR_STATEKEY, TOURNAME_FIELD], action.tourName);
    case CHANGE_DESTCITY:
      return state
        .setIn([ADDTOUR_STATEKEY, DESTCITY_FIELD], action.destCity);
    case VALIDATE_DATE:
      return validateDate(action.date, action.field, state);
    case VALIDATE_FIELD:
      return validateText(action.text, action.field, action.regExps, state);
    default:
      return state;
  }
}
function validateDate(date, field, state) {
  state = state.setIn([ADDTOUR_STATEKEY, field], date);
  const fieldError = field.concat('Error');
  if (isEmptyString(date)) {
    return state.setIn([ADDTOURERROR_STATEKEY, fieldError], messages.cannotbeEmptyError.defaultMessage);
  }
  const a = new Date(date);
  const today = new Date();
  const msDateA = Date.UTC(a.getFullYear(), a.getMonth()+1, a.getDate());
  const msDateB = Date.UTC(today.getFullYear(), today.getMonth()+1, today.getDate());
  if (msDateA < msDateB) {
    return state.setIn([ADDTOURERROR_STATEKEY, fieldError], messages.cannotbeBeforeCurrentDateError.defaultMessage);
  }
  return state.setIn([ADDTOURERROR_STATEKEY, fieldError], '');
}

function validateText(text, field, regExps, state) {
  const fieldError = field.concat('Error');
  if (isEmptyString(text)) {
    return state.setIn([ADDTOURERROR_STATEKEY, fieldError], messages.cannotbeEmptyError.defaultMessage);
  }
  for (const regExp of regExps) {
    const expression = new RegExp(regExp.defaultMessage);
    if (!expression.test(text)) {
      return state.setIn([ADDTOURERROR_STATEKEY, fieldError], regExp.description);
    }
  }
  return state.setIn([ADDTOURERROR_STATEKEY, fieldError], '');
}

export default addTourReducer;
