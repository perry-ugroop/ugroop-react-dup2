/**
 * Created by Yang on 28/10/16.
 */
import {
  CHANGE_TOURNAME,
  CHANGE_DESTCITY,
  VALIDATE_FIELD,
  VALIDATE_DATE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
function changeTourName(name) {
  return {
    type: CHANGE_TOURNAME,
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

function changeDestCity(name) {
  return {
    type: CHANGE_DESTCITY,
    name,
  };
}

function validText({ text, field, regExps }) {
  return {
    type: VALIDATE_FIELD,
    field,
    text,
    regExps,
  };
}

function validDate({ date, field }) {
  return {
    type: VALIDATE_DATE,
    date,
    field,
  };
}
export { changeTourName, changeDestCity, validText, validDate };
