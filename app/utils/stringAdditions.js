/**
 * Created by Yang on 28/10/16.
 */
import _ from 'lodash';

function isEmptyString(str) {
  return (!str || str.length === 0);
}

function truncateAndToLowerCase(str, patterns, maxlength) {
  const newStr = _.truncate(str, {
    length: maxlength,
    separator: patterns,
    omission: '',
  });
  return _.toLower(newStr);
}

export { isEmptyString, truncateAndToLowerCase };
