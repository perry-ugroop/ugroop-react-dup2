/**
 * Created by Yang on 2/11/16.
 */
import {
  CHANGE_EMAIL,
  VALID_EMAIL,
  SUBMIT_FORGETPASSWORD,
  FORGETPASSWORD_REQUEST_FAIL,
  FORGETPASSWORD_REQUEST_SUCCESS,
} from './constants';

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

export function validEmail(email) {
  return {
    type: VALID_EMAIL,
    email,
  };
}

export function submitForgetPassword() {
  return {
    type: SUBMIT_FORGETPASSWORD,
  };
}

export function forgetPasswordRequestSuccess() {
  return {
    type: FORGETPASSWORD_REQUEST_SUCCESS,
  };
}

export function forgetPasswordRequestFail(error) {
  return {
    type: FORGETPASSWORD_REQUEST_FAIL,
    error,
  };
}
