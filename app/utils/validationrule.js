/**
 * Created by Yang on 9/11/16.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  nameValidation: {
    id: 'ugroop.utils.validation.nameValidation',
    description: 'Use letters only please.',
    defaultMessage: '^[A-Za-z]+([-\'][A-Za-z]+)?([A-Za-z]+([-\'][A-Za-z]+)?)*$',
  },
  characterConstraints: {
    id: 'ugroop.utils.validation.characterConstraint',
    description: 'Must be between 2 and 30 characters long.',
    defaultMessage: '^.{2,30}$',
  },
  characterOnly: {
    id: 'ugroop.utils.validation.characterOnly',
    description: 'Use letters only please',
    defaultMessage: '[^0-9 ]*$', //eslint-disable-line no-useless-escape
  },
  emailValidation: {
    id: 'ugroop.utils.validation.email',
    description: 'The Email field is not a valid e-mail address.',
    defaultMessage: '^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$', //eslint-disable-line no-useless-escape
  },
  passwordValidation: {
    id: 'ugroop.utuks,validation.password',
    description: 'Minimum 8 characters at least 1 Alphabet and 1 Number.',
    defaultMessage: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$', //eslint-disable-line no-useless-escape
  },
});
