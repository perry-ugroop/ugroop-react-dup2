/**
 * Created by Yang on 2/11/16.
 */
import {
  CHANGE_EMAIL,
  VALID_EMAIL,
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
