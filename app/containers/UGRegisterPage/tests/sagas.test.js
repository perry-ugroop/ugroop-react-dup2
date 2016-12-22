/**
 * Created by Yang on 9/12/16.
 */

import { getUserOrgSignUpWatcher, userOrgSignUp, userOrgSignUpData, convertToOrgKey, trimOrgName } from '../sagas';
import { SUBMIT_REGISTERATION } from '../constants';
import { takeLatest } from 'redux-saga';
import { fork, take, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { registerSuccess, registerError } from '../actions';

describe('getUserOrgSignUpWatcher Saga', () => {
  const getLoginWatcherGenerator = getUserOrgSignUpWatcher();
  it('should watch for SUBMIT_REGISTERATION action', () => {
    const takeDescriptor = getLoginWatcherGenerator.next().value;
    expect(takeDescriptor).toEqual(fork(takeLatest, SUBMIT_REGISTERATION, userOrgSignUp));
  });
});

describe('UserOrgSignUpData Saga', () => {
  const registerData = userOrgSignUpData();

  let forkDescriptor;

  it('should asyncronously fork getUserOrgSignUpWatcher saga', () => {
    forkDescriptor = registerData.next();
    expect(forkDescriptor.value).toEqual(fork(getUserOrgSignUpWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = registerData.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });
});

describe('userOrgSignUp Saga', () => {
  let getUserOrgSignUpGenerator;
  const userOrgSignUpEndPoint = '/usrOrgSignUp';
  const data = {
    email: 'yuy0311@gmail.com',
    password: 'adf',
    surname: 'adsf',
    givenName: 'adsf',
    status: 'ENABLED',
    orgName: 'adsf',
    orgNameKey: 'adsf',
    orgStatus: 'ENABLED',
  };

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getUserOrgSignUpGenerator = userOrgSignUp();
    const orgName = '';
    const orgAddress = '';
    let selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next({ orgName, orgAddress }).value;
    expect(selectDescriptor).toMatchSnapshot();
    selectDescriptor = getUserOrgSignUpGenerator.next({ orgName }).value;
    expect(selectDescriptor).toMatchSnapshot();
    const callDescriptor = getUserOrgSignUpGenerator.next({ userOrgSignUpEndPoint, data }).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the registerSuccess action if it requests the data successfully', () => {
    const response = { account: 'adf' };
    const putDescriptor = getUserOrgSignUpGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(registerSuccess(response)));
  });

  it('should call the registerError action if the response errors', () => {
    const errorMsg = 'some error';
    const error = new Error();
    error.response = { message: errorMsg };
    const putDescriptor = getUserOrgSignUpGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(registerError(errorMsg)));
  });
});

describe('convertToOrgKey', () => {
  it('should convert correct Org Key', () => {
    const name = 'This is My Org Name I - think this is working to work indeed!!!!@#$%^&';
    const address = '2123 Fillmore St (btwn California &amp; Sacramento St), San Francisco, CA 94115, United States';
    const convertKey = convertToOrgKey(name, address);
    const orgkey = convertKey.next().value;
    expect(orgkey).toEqual('com-thisismyorgnameithinkthisiswor-2123fillmorestbtwncaliforniaam');
  });
  it('should convert correct Org Key', () => {
    const name = 'uGroop';
    const address = '175 Mills St, Albert Park, 3031';
    const convertKey = convertToOrgKey(name, address);
    const orgkey = convertKey.next().value;
    expect(orgkey).toEqual('com-ugroop-175millsstalbertpark3031');
  });
});

describe('trimOrgName', () => {
  const name = 'This is My Org Name I - think this is working to work indeed!!!!@#$%^&';
  const trimOrg = trimOrgName(name, name);
  it('should convert correct Org Key', () => {
    const orgName = trimOrg.next().value;
    expect(orgName).toEqual(name);
  });
});
