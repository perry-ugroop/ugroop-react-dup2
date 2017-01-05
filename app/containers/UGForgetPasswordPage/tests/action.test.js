/**
 * Created by Yang on 2/11/16.
 */
import { changeEmail, validEmail, submitForgetPassword } from '../actions';
import { CHANGE_EMAIL, VALID_EMAIL, SUBMIT_FORGETPASSWORD } from '../constants';

describe('changeEmail', () => {
  it('should return the correct type and the passed email', () => {
    const fixture = 'email';
    const expectedResult = {
      type: CHANGE_EMAIL,
      email: fixture,
    };
    expect(changeEmail(fixture)).toEqual(expectedResult);
  });

  it('should return the correct type and the passed email', () => {
    const fixture = 'email';
    const expectedResult = {
      type: VALID_EMAIL,
      email: fixture,
    };
    expect(validEmail(fixture)).toEqual(expectedResult);
  });
});

describe('forgetpassword request dispatch', () => {
  it('should return the correct type and the passed email', () => {
    const expectedResult = {
      type: SUBMIT_FORGETPASSWORD,
    };
    expect(submitForgetPassword()).toEqual(expectedResult);
  });
});

