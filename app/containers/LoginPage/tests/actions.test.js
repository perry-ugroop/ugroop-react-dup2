/**
 * Created by Yang on 29/10/16.
 */
import expect from 'expect';

import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from '../constants';

import {
  changeUsername,
  changePassword,
} from '../actions';

describe('Login Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_USERNAME,
        name: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });

  describe('changePassword', () => {
    it('should return the correct type and the passed password', () => {
      const fixture = 'Pw';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password: fixture,
      };

      expect(changePassword(fixture)).toEqual(expectedResult);
    });
  });
});
