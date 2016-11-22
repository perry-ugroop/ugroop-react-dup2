/**
 * Created by Yang on 28/10/16.
 */
import {
  CHANGE_TOURNAME,
  CHANGE_DESTCITY,
  VALIDATE_FIELD,
  VALIDATE_DATE,
} from './constants';


function changeTourName(tourName) {
  return {
    type: CHANGE_TOURNAME,
    tourName,
  };
}


function changeDestCity(destCity) {
  return {
    type: CHANGE_DESTCITY,
    destCity,
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
