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
import { loginAccountLoaded } from '../App/actions';
import { loginError } from './actions';
import { LOGIN_SUBMIT } from './constants';
import { actions } from 'react-stormpath';
import { selectUsername, selectPassword } from './selectors';
/**
 * Login
 * StormPath
 */

function loginRequest(options) {
  return new Promise((resolve, reject) => {
    actions.login(options, (err, res) => {
      if (err) {
        const error = new Error(err.status);
        error.response = err;
        reject(error);
      } else {
        resolve(res);
      }
    });
  });
}

export function* login() {
  // Select username and password
  const username = yield select(selectUsername());
  const password = yield select(selectPassword());

  try {
    const loginResponse = yield call(loginRequest, {
      username,
      password,
    });
    yield put(loginAccountLoaded(loginResponse));
  } catch (err) {
    const errMsg = err.response.message;
    yield put(loginError(errMsg));
  }
}

/**
 * Watches for LOGIN_SUBMIT actions and calls login when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getLoginWatcher() {
  yield fork(takeLatest, LOGIN_SUBMIT, login);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getLoginWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loginData,
];
