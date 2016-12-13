/**
 * Created by Yang on 7/11/16.
 */
import { createSelector } from 'reselect';
import { SIGNUP_USER_STATEKEY, SIGNUP_ERROR_STATEKEY, ORGNAME_FIELD, ORGADDRESS_FIELD,
FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, WEBSITE_FIELD, ROLE_FIELD,
PASSWORD_FIELD, RETYPE_PASSWORD_FIELD, TELEPHONE_FIELD, SERVER_VALIDATION_ERROR } from './constants';

const selectRegisterpage = () => (state) => state.get('register');

const selectOrgName = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, ORGNAME_FIELD])
);

const selectOrgAddress = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, ORGADDRESS_FIELD])
);

const selectFirstName = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, FIRSTNAME_FIELD])
);

const selectLastName = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, LASTNAME_FIELD])
);

const selectEmail = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, EMAIL_FIELD])
);

const selectWebsite = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, WEBSITE_FIELD])
);

const selectRole = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, ROLE_FIELD])
);

const selectPassword = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, PASSWORD_FIELD])
);

const selectReTypePassword = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, RETYPE_PASSWORD_FIELD])
);

const selectTelephone = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_USER_STATEKEY, TELEPHONE_FIELD])
);

const selectOrgNameError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, ORGNAME_FIELD.concat('Error')])
);

const selectOrgAddressError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY,
    ORGADDRESS_FIELD.concat('Error')])
);

const selectFirstNameError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, FIRSTNAME_FIELD.concat('Error')])
);

const selectLastNameError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, LASTNAME_FIELD.concat('Error')])
);

const selectEmailError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, EMAIL_FIELD.concat('Error')])
);

const selectTelephoneError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, TELEPHONE_FIELD.concat('Error')])
);

const selectPasswordError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, PASSWORD_FIELD.concat('Error')])
);

const selectReTypePasswordError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, RETYPE_PASSWORD_FIELD.concat('Error')])
);

const selectServerValidationError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUP_ERROR_STATEKEY, SERVER_VALIDATION_ERROR])
);

export {
  selectRegisterpage,
  selectOrgName,
  selectOrgAddress,
  selectFirstName,
  selectLastName,
  selectEmail,
  selectWebsite,
  selectRole,
  selectPassword,
  selectReTypePassword,
  selectTelephone,
  selectOrgNameError,
  selectOrgAddressError,
  selectFirstNameError,
  selectLastNameError,
  selectEmailError,
  selectTelephoneError,
  selectPasswordError,
  selectReTypePasswordError,
  selectServerValidationError,
};
