/**
 * Created by Yang on 8/11/16.
 */
import {
  CHANGE_ORGNAME,
  CHANGE_ORGADDRESS,
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  CHANGE_EMAIL,
  CHANGE_ROLE,
  CHANGE_WEBSITE,
  CHANGE_TELEPHONE,
  CHANGE_PASSWORD,
  CHANGE_RETYPEPASSWORD,
  SIGNUP_USER_STATEKEY,
  SIGNUP_ERROR_STATEKEY,
  VALIDATE_RETYPEPASSWORD,
  VALIDATE_FIELD,
  ORGNAME_FIELD, ORGADDRESS_FIELD, FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, PASSWORD_FIELD, WEBSITE_FIELD,
  ROLE_FIELD, TELEPHONE_FIELD, RETYPE_PASSWORD_FIELD, USER_ORG_SIGNUP_SUCCESS,
  USER_ORG_SIGNUP_ERROR, SERVER_VALIDATION_ERROR,
} from './constants';
import { fromJS } from 'immutable';
import messages from './messages';
import { isEmptyString } from '../../utils/stringAdditions';

// The initial state of the App
const initialState = fromJS({
  signUpUser: fromJS({
    orgName: '',
    orgAddress: '',
    firstName: '',
    lastName: '',
    role: '',
    password: '',
    retypePassword: '',
    website: '',
    telephone: '',
    email: '',
  }),
  signUpError: fromJS({
    orgError: '',
    orgAddressError: '',
    firstNameError: '',
    lastNameError: '',
    telephoneError: '',
    emailError: '',
    passwordError: '',
    retypePasswordError: '',
    serverValidationError: '',
  }),
  isRegisterSuccess: false,
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ORGNAME:
      return state
        .setIn([SIGNUP_USER_STATEKEY, ORGNAME_FIELD], action.orgName);
    case CHANGE_ORGADDRESS:
      return state
        .setIn([SIGNUP_USER_STATEKEY, ORGADDRESS_FIELD], action.address);
    case CHANGE_FIRSTNAME:
      return state
        .setIn([SIGNUP_USER_STATEKEY, FIRSTNAME_FIELD], action.fname);
    case CHANGE_LASTNAME:
      return state
        .setIn([SIGNUP_USER_STATEKEY, LASTNAME_FIELD], action.lname);
    case CHANGE_EMAIL:
      return state
        .setIn([SIGNUP_USER_STATEKEY, EMAIL_FIELD], action.email);
    case CHANGE_ROLE:
      return state
        .setIn([SIGNUP_USER_STATEKEY, ROLE_FIELD], action.role);
    case CHANGE_WEBSITE:
      return state
        .setIn([SIGNUP_USER_STATEKEY, WEBSITE_FIELD], action.website);
    case CHANGE_TELEPHONE:
      return state
        .setIn([SIGNUP_USER_STATEKEY, TELEPHONE_FIELD], action.telephone);
    case CHANGE_PASSWORD:
      return state
        .setIn([SIGNUP_USER_STATEKEY, PASSWORD_FIELD], action.password);
    case CHANGE_RETYPEPASSWORD:
      return state
        .setIn([SIGNUP_USER_STATEKEY, RETYPE_PASSWORD_FIELD], action.password);
    case VALIDATE_RETYPEPASSWORD:
      return validateReTypePassword(action.password, state);
    case VALIDATE_FIELD:
      return validateText(action.text, action.field, action.regExps, state);
    case USER_ORG_SIGNUP_SUCCESS:
      return state
        .set('isRegisterSuccess', true);
    case USER_ORG_SIGNUP_ERROR:
      return state
        .setIn([SIGNUP_ERROR_STATEKEY, SERVER_VALIDATION_ERROR], action.serverError)
        .set('isRegisterSuccess', false);
    default:
      return state;
  }
}

function validateReTypePassword(reTypePassowrd, state) {
  if (isEmptyString(reTypePassowrd)) {
    return state
      .setIn([SIGNUP_ERROR_STATEKEY, 'retypePasswordError'], messages.cannotbeEmptyError.defaultMessage);
  }
  const password = state.getIn([SIGNUP_USER_STATEKEY, PASSWORD_FIELD]);
  if (password !== reTypePassowrd) {
    return state
      .setIn([SIGNUP_ERROR_STATEKEY, 'retypePasswordError'], messages.passwordDoNotMatchError.defaultMessage);
  }
  return state.setIn([SIGNUP_ERROR_STATEKEY, 'retypePasswordError'], '');
}

function validateText(text, field, regExps, state) {
  const fieldError = field.concat('Error');
  if (isEmptyString(text)) {
    return state.setIn([SIGNUP_ERROR_STATEKEY, fieldError], messages.cannotbeEmptyError.defaultMessage);
  }
  for (const regExp of regExps) {
    const expression = new RegExp(regExp.defaultMessage);
    if (!expression.test(text)) {
      return state.setIn([SIGNUP_ERROR_STATEKEY, fieldError], regExp.description);
    }
  }
  return state.setIn([SIGNUP_ERROR_STATEKEY, fieldError], '');
}

export default registerReducer;
