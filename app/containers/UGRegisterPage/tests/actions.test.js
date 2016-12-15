/**
 * Created by Yang on 8/11/16.
 */
import {
  CHANGE_ORGNAME,
  CHANGE_ORGADDRESS,
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  CHANGE_EMAIL,
  CHANGE_WEBSITE,
  CHANGE_TELEPHONE,
  CHANGE_ROLE,
  CHANGE_PASSWORD,
  CHANGE_RETYPEPASSWORD,
  VALIDATE_FIELD,
  VALIDATE_RETYPEPASSWORD,
  SUBMIT_REGISTERATION,
  USER_ORG_SIGNUP_SUCCESS,
  USER_ORG_SIGNUP_ERROR,
} from '../constants';

import {
  changeOrgName,
  changeOrgAddress,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeWebsite,
  changeTelephone,
  changeRole,
  changePassword,
  changeRetypePassword,
  validText,
  validReTypePassword,
  submitUserSignUp,
  registerError,
  registerSuccess,
} from '../actions';

describe('Register Actions', () => {
  describe('changeOrgName', () => {
    it('should return the correct type and the passed orgName', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_ORGNAME,
        orgName: fixture,
      };
      expect(changeOrgName(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeOrgName', () => {
    it('should return the correct type and the passed orgName', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_ORGNAME,
        orgName: fixture,
      };
      expect(changeOrgName(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeOrgAddress', () => {
    it('should return the correct type and the passed orgAddress', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_ORGADDRESS,
        address: fixture,
      };
      expect(changeOrgAddress(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeFirstName', () => {
    it('should return the correct type and the passed fname', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_FIRSTNAME,
        fname: fixture,
      };
      expect(changeFirstName(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeLastName', () => {
    it('should return the correct type and the passed lname', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_LASTNAME,
        lname: fixture,
      };
      expect(changeLastName(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeEmail', () => {
    it('should return the correct type and the passed email', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_EMAIL,
        email: fixture,
      };
      expect(changeEmail(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeWebsite', () => {
    it('should return the correct type and the passed website', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_WEBSITE,
        website: fixture,
      };
      expect(changeWebsite(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeTelephone', () => {
    it('should return the correct type and the passed telephone', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_TELEPHONE,
        telephone: fixture,
      };
      expect(changeTelephone(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeRole', () => {
    it('should return the correct type and the passed role', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_ROLE,
        role: fixture,
      };
      expect(changeRole(fixture)).toEqual(expectedResult);
    });
  });
  describe('changePassword', () => {
    it('should return the correct type and the passed password', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password: fixture,
      };
      expect(changePassword(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeReTypePassword', () => {
    it('should return the correct type and the passed reTypePassword', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_RETYPEPASSWORD,
        password: fixture,
      };
      expect(changeRetypePassword(fixture)).toEqual(expectedResult);
    });
  });
  describe('validate', () => {
    it('should return the correct type and the passed correct object', () => {
      const fixture = { text: 'abc', regExps: ['', ''], field: 'some field' };
      const { text, regExps, field } = fixture;
      const expectedResult = {
        type: VALIDATE_FIELD,
        text,
        regExps,
        field,
      };
      expect(validText(fixture)).toEqual(expectedResult);
    });
  });
  describe('validate_retypepassword', () => {
    it('should return the correct type and the passed reTypePassword', () => {
      const fixture = 'pw';
      const expectedResult = {
        type: VALIDATE_RETYPEPASSWORD,
        password: fixture,
      };
      expect(validReTypePassword(fixture)).toEqual(expectedResult);
    });
  });
  describe('submit user org sign up action', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SUBMIT_REGISTERATION,
      };
      expect(submitUserSignUp()).toEqual(expectedResult);
    });
  });
  describe('register server validation', () => {
    it('should return the correct type and success response', () => {
      const fixture = 'data';
      const expectedResult = {
        type: USER_ORG_SIGNUP_SUCCESS,
        response: fixture,
      };
      expect(registerSuccess(fixture)).toEqual(expectedResult);
    });
    it('should return the correct type and error', () => {
      const fixture = 'some error';
      const expectedResult = {
        type: USER_ORG_SIGNUP_ERROR,
        serverError: fixture,
      };
      expect(registerError(fixture)).toEqual(expectedResult);
    });
  });
});
