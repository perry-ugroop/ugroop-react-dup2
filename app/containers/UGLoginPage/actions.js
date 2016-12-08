/**
 * Created by Yang on 28/10/16.
 */
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  LOGIN_SUBMIT,
  LOAD_LOGINERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */

function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

function submitLogin() {
  return {
    type: LOGIN_SUBMIT,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
function loginError(error) {
  return {
    type: LOAD_LOGINERROR,
    error,
  };
}


export { changeUsername, changePassword, submitLogin, loginError };
