// /**
//  * Created by Yang on 5/12/16.
//  */
// /**
//  * User Org Sign up from Stormpath
//  */
//
import { takeLatest } from 'redux-saga';
import { call, take, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { registerError, registerSuccess } from './actions';
import { selectFirstName,
  selectLastName,
  selectOrgAddress,
  selectOrgName,
  selectRole,
  selectWebsite,
  selectTelephone,
  selectEmail,
  selectPassword,
} from './selectors';
import { postJSONRequest } from '../../utils/request';
import { SUBMIT_REGISTERATION } from './constants';
import { userOrgSignUpEndPoint } from './requestEndPoint';
import _ from 'lodash';
import { truncateAndToLowerCase } from '../../utils/stringAdditions';
import defineMessages from '../../utils/validationrule';
/**
 *  The way how to generate Org Key.
 ** com-{ORG_NAME_KEY}(Max30)-{ORG_ADDRESS_KEY}(TotalLength-3-Length of Org Name key)
 */
const MAX_ORGKEY_LENGTH = 58;
const MAX_ORGNAMEKEY_LENGTH = 30;
const MAX_ORGNAME_LENGTH = 255;

/**
 * Convert from Org Name and Org Address To Org Key
 */
export function* convertToOrgKey(orgName, orgAddress) {
  const reg = new RegExp(defineMessages.alphaNumericOnlyValidation.defaultMessage);
  const allowedOrgNameLength = orgName.length > MAX_ORGNAMEKEY_LENGTH ? MAX_ORGNAMEKEY_LENGTH : orgName.length;
  const allowedOrgAddressLength = MAX_ORGKEY_LENGTH - allowedOrgNameLength;
  const trucateOrgName = truncateAndToLowerCase(orgName, reg, allowedOrgNameLength);
  const trucateOrgAddress = truncateAndToLowerCase(orgAddress, reg, allowedOrgAddressLength);
  return `com-${trucateOrgName}-${trucateOrgAddress}`;
}

export function* trimOrgName(orgName) {
  return _.truncate(orgName, {
    length: MAX_ORGNAME_LENGTH,
    separator: '',
  });
}

/**
 * User-Org-Register
 * StormPath
 */
export function* userOrgSignUp() {
  const orgName = yield select(selectOrgName());
  const orgAddress = yield select(selectOrgAddress());
  const givenName = yield select(selectFirstName());
  const surname = yield select(selectLastName());
  const role = yield select(selectRole());
  const website = yield select(selectWebsite());
  const telephone = yield select(selectTelephone());
  const email = yield select(selectEmail());
  const password = yield select(selectPassword());
  // trim all whitespace in org address and connect to name to be the key
  const orgNameKey = yield convertToOrgKey(orgName, orgAddress);
  const trimmedOrgName = yield trimOrgName(orgName);
  const accountCustomData = {
    role,
    website,
    telephone,
  };
  const orgCustomData = {
    orgAddress,
  };
  const data = {
    email,
    password,
    surname,
    givenName,
    status: 'ENABLED',
    accountCustomData,
    orgNameKey,
    orgName: trimmedOrgName,
    orgStatus: 'ENABLED',
    orgCustomData,
  };
  try {
    const registerResponse = yield call(postJSONRequest, userOrgSignUpEndPoint, data);
    yield put(registerSuccess(registerResponse));
  } catch (err) {
    const errorMessage = err.response.message;
    yield put(registerError(errorMessage));
  }
}

/**
 * Watches for SUBMIT_REGISTERATION actions and calls userOrgSignUp when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getUserOrgSignUpWatcher() {
  yield fork(takeLatest, SUBMIT_REGISTERATION, userOrgSignUp);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userOrgSignUpData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getUserOrgSignUpWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  userOrgSignUpData,
];
