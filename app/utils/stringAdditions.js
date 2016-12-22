/**
 * Created by Yang on 28/10/16.
 */
import _ from 'lodash';

function isEmptyString(str) {
  return (!str || str.length === 0);
}

function truncateAndToLowerCase(str, patterns, maxlength) {
  const newStr = _.truncate(_.replace(str, patterns, ''), {
    length: maxlength,
    omission: '',
  });
  return _.toLower(newStr);
}

export { isEmptyString, truncateAndToLowerCase };
