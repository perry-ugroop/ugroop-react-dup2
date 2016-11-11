/**
 * Created by Yang on 7/11/16.
 */
import {
  CHANGE_EMAIL,
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  CHANGE_ORGNAME,
  CHANGE_ORGADDRESS,
  CHANGE_PASSWORD,
  CHANGE_RETYPEPASSWORD,
  CHANGE_ROLE,
  CHANGE_TELEPHONE,
  CHANGE_WEBSITE,
  VALIDATE_FIELD,
  VALIDATE_RETYPEPASSWORD,
} from './constants';

function changeOrgName(orgName) {
  return {
    type: CHANGE_ORGNAME,
    orgName,
  };
}

function changeOrgAddress(address) {
  return {
    type: CHANGE_ORGADDRESS,
    address,
  };
}

function changeFirstName(fname) {
  return {
    type: CHANGE_FIRSTNAME,
    fname,
  };
}

function changeLastName(lname) {
  return {
    type: CHANGE_LASTNAME,
    lname,
  };
}

function changeWebsite(website) {
  return {
    type: CHANGE_WEBSITE,
    website,
  };
}

function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

function changeRetypePassword(password) {
  return {
    type: CHANGE_RETYPEPASSWORD,
    password,
  };
}

function changeTelephone(telephone) {
  return {
    type: CHANGE_TELEPHONE,
    telephone,
  };
}

function changeRole(role) {
  return {
    type: CHANGE_ROLE,
    role,
  };
}

function validText({ text, field, regExps }) {
  return {
    type: VALIDATE_FIELD,
    field,
    text,
    regExps,
  };
}

function validReTypePassword(password) {
  return {
    type: VALIDATE_RETYPEPASSWORD,
    password,
  };
}

export { changeOrgName, changeOrgAddress, changeEmail, changeFirstName, changeLastName, changeRole,
  changePassword, changeRetypePassword, changeWebsite, changeTelephone, validText, validReTypePassword };
