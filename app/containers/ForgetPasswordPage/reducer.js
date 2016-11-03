/**
 * Created by Yang on 2/11/16.
 */
import { CHANGE_EMAIL, VALID_EMAIL } from './constants';
import { fromJS } from 'immutable';
import { validateEmail, isEmptyString } from '../../utils/stringAdditions';
import defaultMessage from './messages';

const initialState = fromJS({
  email: '',
  error: '',
});

function forgetPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    case VALID_EMAIL:
      return validEmail(action.email, state);
    default:
      return state;
  }
}

function validEmail(email, state) {
  if (isEmptyString(email)) {
    return state
      .set('error', defaultMessage.emptyEmailError.defaultMessage)
      .set('email', email);
  }
  if (validateEmail(email)) {
    return state
      .set('error', '')
      .set('email', email);
  }
  return state
    .set('error', defaultMessage.invalidEmailError.defaultMessage)
    .set('email', email);
}

export default forgetPageReducer;
