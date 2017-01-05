/**
 * Created by Yang on 19/12/16.
 */
import { forgetPasswordData, requestForgetPassword, getForgetPasswordWatcher } from '../sagas';
import { SUBMIT_FORGETPASSWORD } from '../constants';
import { takeLatest } from 'redux-saga';
import { fork, take, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { forgetPasswordRequestSuccess, forgetPasswordRequestFail } from '../actions';

describe('getUserOrgSignUpWatcher Saga', () => {
  const getLoginWatcherGenerator = getForgetPasswordWatcher();
  it('should watch for SUBMIT_REGISTERATION action', () => {
    const takeDescriptor = getLoginWatcherGenerator.next().value;
    expect(takeDescriptor).toEqual(fork(takeLatest, SUBMIT_FORGETPASSWORD, requestForgetPassword));
  });
});

describe('forgetPasswordData  Saga', () => {
  const registerData = forgetPasswordData();

  let forkDescriptor;

  it('should asyncronously fork getForgetPasswordWatcher saga', () => {
    forkDescriptor = registerData.next();
    expect(forkDescriptor.value).toEqual(fork(getForgetPasswordWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = registerData.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });
});

describe('getForgetPassword Saga', () => {
  let getForgetPasswordGenerator;
  const forgetPasswordEndPoint = '/forget';
  const data = {
    email: 'yuy0311@gmail.com',
  };
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getForgetPasswordGenerator = requestForgetPassword();
    const selectDescriptor = getForgetPasswordGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    const callDescriptor = getForgetPasswordGenerator.next({ forgetPasswordEndPoint, data }).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the forgetPasswordRequestSuccess action if it requests the data successfully', () => {
    const putDescriptor = getForgetPasswordGenerator.next().value;
    expect(putDescriptor).toEqual(put(forgetPasswordRequestSuccess()));
  });

  it('should call the forgetPasswordRequestFail action if the response errors', () => {
    const errorMsg = 'some error';
    const error = new Error();
    error.response = { message: errorMsg };
    const putDescriptor = getForgetPasswordGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(forgetPasswordRequestFail(errorMsg)));
  });
});
