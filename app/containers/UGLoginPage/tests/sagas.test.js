/**
 * Created by Yang on 9/12/16.
 */
/**
 * Tests for Login sagas
 */

import { takeLatest } from 'redux-saga';
import { take, put, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getLoginWatcher, login, loginData } from '../sagas';
import { loginAccountLoaded } from 'containers/App/actions';
import { loginError } from '../actions';
import { LOGIN_SUBMIT } from '../constants';

const username = 'yuy0311@test.com';
const password = '1341234';

describe('getLogin Saga', () => {
  let getLoginGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getLoginGenerator = login();

    let selectDescriptor = getLoginGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    selectDescriptor = getLoginGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getLoginGenerator.next({ username, password }).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loginAccountLoaded action if it requests the data successfully', () => {
    const response = { account: 'adf' };
    const putDescriptor = getLoginGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loginAccountLoaded(response)));
  });

  it('should call the loginError action if the response errors', () => {
    const errorMsg = 'some errors';
    const error = new Error();
    error.response = { message: errorMsg };
    const putDescriptor = getLoginGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(loginError(errorMsg)));
  });
});

describe('getLoginWatcher Saga', () => {
  const getLoginWatcherGenerator = getLoginWatcher();
  it('should watch for LOGIN_SUBMIT action', () => {
    const takeDescriptor = getLoginWatcherGenerator.next().value;
    expect(takeDescriptor).toEqual(fork(takeLatest, LOGIN_SUBMIT, login));
  });
});

describe('LoginData Saga', () => {
  const loginDataSaga = loginData();

  let forkDescriptor;

  it('should asyncronously fork getLoginWatcher saga', () => {
    forkDescriptor = loginDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getLoginWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = loginDataSaga.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });
});
