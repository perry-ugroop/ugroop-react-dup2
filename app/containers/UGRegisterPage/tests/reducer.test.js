/**
 * Created by Yang on 8/11/16.
 */
import registerReducer from '../reducer';
import {
  changeOrgName,
  changeOrgAddress,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeRole,
  changeWebsite,
  changeTelephone,
  changePassword,
  changeRetypePassword,
  validReTypePassword,
  validText,
  registerError,
  submitUserSignUp,
} from '../actions';
import {
  SIGNUP_USER_STATEKEY,
  SIGNUP_ERROR_STATEKEY,
  FIRSTNAME_FIELD,
  LASTNAME_FIELD,
  EMAIL_FIELD,
  TELEPHONE_FIELD,
  PASSWORD_FIELD,
  IS_LOADING_STATEKEY,
  SERVER_VALIDATION_ERROR,
} from '../constants';
import validationRule from '../../../utils/validationrule';
import messages from '../messages';
import { fromJS } from 'immutable';

describe('registerReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
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
      isLoading: false,
    });
  });

  it('should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual(state);
  });

  it('should handle the changeOrgName action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'orgName'], fixture);
    expect(registerReducer(state, changeOrgName(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeOrgAddress action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'orgAddress'], fixture);
    expect(registerReducer(state, changeOrgAddress(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeFirstName action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'firstName'], fixture);
    expect(registerReducer(state, changeFirstName(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeLastName action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'lastName'], fixture);
    expect(registerReducer(state, changeLastName(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeRole action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'role'], fixture);
    expect(registerReducer(state, changeRole(fixture))).toEqual(expectedResult);
  });

  it('should handle the changePassword action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'password'], fixture);
    expect(registerReducer(state, changePassword(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeReTypePassword action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'retypePassword'], fixture);
    expect(registerReducer(state, changeRetypePassword(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeWebsite action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'website'], fixture);
    expect(registerReducer(state, changeWebsite(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeReTypePassword action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'retypePassword'], fixture);
    expect(registerReducer(state, changeRetypePassword(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeTelephone action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'telephone'], fixture);
    expect(registerReducer(state, changeTelephone(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeEmail action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.setIn([SIGNUP_USER_STATEKEY, 'email'], fixture);
    expect(registerReducer(state, changeEmail(fixture))).toEqual(expectedResult);
  });
  it('should valid reTypePassword action correctly and pass empty string', () => {
    const fixture = '';
    const expectedErrorMessage = messages.cannotbeEmptyError.defaultMessage;
    const expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'retypePasswordError'], expectedErrorMessage);
    expect(registerReducer(state, validReTypePassword(fixture))).toEqual(expectedResult);
  });
  it('should valid reTypePassword action correctly if retypepassword it not matched with password', () => {
    const initalPassword = 'inital password';
    const retypePassword = 'something else';
    const expectedErrorMessage = messages.passwordDoNotMatchError.defaultMessage;
    const predefinedState = state.setIn([SIGNUP_USER_STATEKEY, 'password'], initalPassword);
    const expectedResult = predefinedState
      .setIn([SIGNUP_ERROR_STATEKEY, 'retypePasswordError'], expectedErrorMessage);
    expect(registerReducer(predefinedState, validReTypePassword(retypePassword))).toEqual(expectedResult);
  });
  it('should validate first name correctly and no empty characters', () => {
    const text = '';
    const regExps = [validationRule.characterOnly, validationRule.characterConstraints, validationRule.nameValidation];
    const field = FIRSTNAME_FIELD;
    const expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'firstNameError'], messages.cannotbeEmptyError.defaultMessage);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });
  it('should validate first name correctly and abound to the character rule', () => {
    let text = 'a';
    const regExps = [validationRule.characterConstraints, validationRule.nameValidation];
    const field = FIRSTNAME_FIELD;
    let expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'firstNameError'], validationRule.characterConstraints.description);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
    text = 'qqa2';
    expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'firstNameError'], validationRule.nameValidation.description);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
    text = 'oww';
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(state);
  });
  it('should validate last name correctly and no empty characters', () => {
    const text = '';
    const regExps = [validationRule.characterOnly, validationRule.characterConstraints, validationRule.nameValidation];
    const field = LASTNAME_FIELD;
    const expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'lastNameError'], messages.cannotbeEmptyError.defaultMessage);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });
  it('should validate last name correctly and abound to the character rule', () => {
    let text = 'a';
    const regExps = [validationRule.characterConstraints, validationRule.nameValidation];
    const field = LASTNAME_FIELD;
    let expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'lastNameError'], validationRule.characterConstraints.description);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
    text = 'aaa2';
    expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'lastNameError'], validationRule.nameValidation.description);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
    text = 'o\'brien';
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(state);
  });
  it('should validate email correctly and no empty characters', () => {
    const text = '';
    const regExps = [];
    const field = EMAIL_FIELD;
    const expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'emailError'], messages.cannotbeEmptyError.defaultMessage);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });
  it('should validate email correctly and abound to the character rule', () => {
    let text = 'a@a.com';
    const regExps = [validationRule.emailValidation];
    const field = EMAIL_FIELD;
    let expectedResult = state;
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
    text = 'a@a';
    expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'emailError'], validationRule.emailValidation.description);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });
  it('should validate telephone correctly and no empty characters', () => {
    const text = '';
    const regExps = [];
    const field = TELEPHONE_FIELD;
    const expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'telephoneError'], messages.cannotbeEmptyError.defaultMessage);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });
  it('should validate password correctly and no empty characters', () => {
    const text = '';
    const regExps = [];
    const field = PASSWORD_FIELD;
    const expectedResult = state.setIn([SIGNUP_ERROR_STATEKEY, 'passwordError'], messages.cannotbeEmptyError.defaultMessage);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });
  it('should validate password correctly and abound to the character rule', () => {
    let text = '123123s';
    const regExps = [validationRule.passwordValidation];
    const field = PASSWORD_FIELD;
    const expectedResult = state
      .setIn([SIGNUP_ERROR_STATEKEY, 'passwordError'], validationRule.passwordValidation.description);
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
    // Modify the text to match the validation rule.
    text = 'HpfNsrdd42';
    expect(registerReducer(state, validText({ text, field, regExps }))).toEqual(state);
  });
  it('should set Server error correctly', () => {
    const serverError = 'error';
    const expectedResult = state
      .setIn([SIGNUP_ERROR_STATEKEY, SERVER_VALIDATION_ERROR], serverError);
    expect(registerReducer(state, registerError(serverError))).toEqual(expectedResult);
  });
  it('should set SUBMIT_REGISTERATION State correctly', () => {
    const isRegisterSuccess = true;
    const expectedResult = state
      .set(IS_LOADING_STATEKEY, isRegisterSuccess)
      .setIn([SIGNUP_ERROR_STATEKEY, SERVER_VALIDATION_ERROR], '');
    expect(registerReducer(state, submitUserSignUp())).toEqual(expectedResult);
  });
});
