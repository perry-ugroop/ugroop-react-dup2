// /**
//  * Created by Yang on 5/12/16.
//  */
// /*
//  * Request ForgetPassword to StormPath
//  */
//
import { takeLatest } from 'redux-saga';
import { call, take, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { forgetPasswordRequestFail, forgetPasswordRequestSuccess } from './actions';
import {
  selectEmail,
} from './selectors';
import { SUBMIT_FORGETPASSWORD } from './constants';
import { actions } from 'react-stormpath';

function resetPasswordRequest(options) {
  return new Promise((resolve, reject) => {
    actions.forgotPassword(options, (err) => {
      if (err) {
        const error = new Error(err.status);
        error.response = err;
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

/**
 * User-Org-Register
 * StormPath
 */
export function* requestForgetPassword() {
  const email = yield select(selectEmail());
  const data = {
    email,
  };
  try {
    yield call(resetPasswordRequest, data);
    yield put(forgetPasswordRequestSuccess());
  } catch (err) {
    const errorMessage = err.response.message;
    yield put(forgetPasswordRequestFail(errorMessage));
  }
}

/**
 * Watches for SUBMIT_FORGETPASSWORD actions and calls requestForgetPassword when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getForgetPasswordWatcher() {
  yield fork(takeLatest, SUBMIT_FORGETPASSWORD, requestForgetPassword);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* forgetPasswordData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getForgetPasswordWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  forgetPasswordData,
];
