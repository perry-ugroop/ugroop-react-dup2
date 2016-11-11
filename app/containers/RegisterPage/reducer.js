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
  SIGNUPUSER_STATEKEY,
  SIGNUPERROR_STATEKEY,
  VALIDATE_RETYPEPASSWORD,
  VALIDATE_FIELD,
  ORGNAME_FIELD, ORGADDRESS_FIELD, FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, PASSWORD_FIELD, WEBSITE_FIELD,
  ROLE_FIELD, TELEPHONE_FIELD, RETYPEPASSWORD_FIELD,
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
  }),
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ORGNAME:
      return state
        .setIn([SIGNUPUSER_STATEKEY, ORGNAME_FIELD], action.orgName);
    case CHANGE_ORGADDRESS:
      return state
        .setIn([SIGNUPUSER_STATEKEY, ORGADDRESS_FIELD], action.address);
    case CHANGE_FIRSTNAME:
      return state
        .setIn([SIGNUPUSER_STATEKEY, FIRSTNAME_FIELD], action.fname);
    case CHANGE_LASTNAME:
      return state
        .setIn([SIGNUPUSER_STATEKEY, LASTNAME_FIELD], action.lname);
    case CHANGE_EMAIL:
      return state
        .setIn([SIGNUPUSER_STATEKEY, EMAIL_FIELD], action.email);
    case CHANGE_ROLE:
      return state
        .setIn([SIGNUPUSER_STATEKEY, ROLE_FIELD], action.role);
    case CHANGE_WEBSITE:
      return state
        .setIn([SIGNUPUSER_STATEKEY, WEBSITE_FIELD], action.website);
    case CHANGE_TELEPHONE:
      return state
        .setIn([SIGNUPUSER_STATEKEY, TELEPHONE_FIELD], action.telephone);
    case CHANGE_PASSWORD:
      return state
        .setIn([SIGNUPUSER_STATEKEY, PASSWORD_FIELD], action.password);
    case CHANGE_RETYPEPASSWORD:
      return state
        .setIn([SIGNUPUSER_STATEKEY, RETYPEPASSWORD_FIELD], action.password);
    case VALIDATE_RETYPEPASSWORD:
      return validateReTypePassword(action.password, state);
    case VALIDATE_FIELD:
      return validateText(action.text, action.field, action.regExps, state);
    default:
      return state;
  }
}

function validateReTypePassword(reTypePassowrd, state) {
  if (isEmptyString(reTypePassowrd)) {
    return state
      .setIn([SIGNUPERROR_STATEKEY, 'retypePasswordError'], messages.cannotbeEmptyError.defaultMessage);
  }
  const password = state.getIn([SIGNUPUSER_STATEKEY, PASSWORD_FIELD]);
  if (password !== reTypePassowrd) {
    return state
      .setIn([SIGNUPERROR_STATEKEY, 'retypePasswordError'], messages.passwordDoNotMatchError.defaultMessage);
  }
  return state.setIn([SIGNUPERROR_STATEKEY, 'retypePasswordError'], '');
}

function validateText(text, field, regExps, state) {
  const fieldError = field.concat('Error');
  if (isEmptyString(text)) {
    return state.setIn([SIGNUPERROR_STATEKEY, fieldError], messages.cannotbeEmptyError.defaultMessage);
  }
  for (const regExp of regExps) {
    const expression = new RegExp(regExp.defaultMessage);
    if (!expression.test(text)) {
      return state.setIn([SIGNUPERROR_STATEKEY, fieldError], regExp.description);
    }
  }
  return state.setIn([SIGNUPERROR_STATEKEY, fieldError], '');
}

export default registerReducer;
