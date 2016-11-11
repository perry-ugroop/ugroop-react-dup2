/**
 * Created by Yang on 7/11/16.
 */
import { createSelector } from 'reselect';
import { SIGNUPUSER_STATEKEY, SIGNUPERROR_STATEKEY, ORGNAME_FIELD, ORGADDRESS_FIELD,
FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, WEBSITE_FIELD, ROLE_FIELD,
PASSWORD_FIELD, RETYPEPASSWORD_FIELD, TELEPHONE_FIELD } from './constants';

const selectRegisterpage = () => (state) => state.get('register');

const selectOrgName = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, ORGNAME_FIELD])
);

const selectOrgAddress = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, ORGADDRESS_FIELD])
);

const selectFirstName = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, FIRSTNAME_FIELD])
);

const selectLastName = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, LASTNAME_FIELD])
);

const selectEmail = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, EMAIL_FIELD])
);

const selectWebsite = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, WEBSITE_FIELD])
);

const selectRole = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, ROLE_FIELD])
);

const selectPassword = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, PASSWORD_FIELD])
);

const selectReTypePassword = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, RETYPEPASSWORD_FIELD])
);

const selectTelephone = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPUSER_STATEKEY, TELEPHONE_FIELD])
);

const selectOrgNameError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, ORGNAME_FIELD.concat('Error')])
);

const selectOrgAddressError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY,
    ORGADDRESS_FIELD.concat('Error')])
);

const selectFirstNameError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, FIRSTNAME_FIELD.concat('Error')])
);

const selectLastNameError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, LASTNAME_FIELD.concat('Error')])
);

const selectEmailError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, EMAIL_FIELD.concat('Error')])
);

const selectTelephoneError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, TELEPHONE_FIELD.concat('Error')])
);

const selectPasswordError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, PASSWORD_FIELD.concat('Error')])
);

const selectReTypePasswordError = () => createSelector(
  selectRegisterpage(),
  (registerState) => registerState.getIn([SIGNUPERROR_STATEKEY, RETYPEPASSWORD_FIELD.concat('Error')])
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
};
