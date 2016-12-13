// /**
//  * Created by Yang on 5/12/16.
//  */
// /**
//  * Gets the repositories of the user from Github
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
  const orgNameKey = `${orgName}-${_.replace(orgAddress, ' ', '')}`;
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
    orgName,
    orgNameKey,
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
