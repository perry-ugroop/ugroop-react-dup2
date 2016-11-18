/**
 * Created by Yang on 28/10/16.
 */
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
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

export { changeUsername, changePassword };
