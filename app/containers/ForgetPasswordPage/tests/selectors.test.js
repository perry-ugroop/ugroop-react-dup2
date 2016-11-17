/**
 * Created by Yang on 2/11/16.
 */
import { fromJS } from 'immutable';
import {
  selectForgetPasswordPage,
  selectEmail,
  selectError,
} from '../selectors';

describe('selectForgetPasswordpage', () => {
  const forgetPasswordSelector = selectForgetPasswordPage();
  it('should select the forgetpassword state', () => {
    const state = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      forgetpassword: state,
    });
    expect(forgetPasswordSelector(mockedState)).toEqual(state);
  });
});

describe('selectEmail', () => {
  const selectUsernameSelector = selectEmail();
  it('should select the login state', () => {
    const email = 'mxstbr';
    const mockedState = fromJS({
      forgetpassword: {
        email,
      },
    });
    expect(selectUsernameSelector(mockedState)).toEqual(email);
  });
});

describe('selectError', () => {
  const selectErrorSelector = selectError();
  it('should select the error state', () => {
    const error = 'some error';
    const mockedState = fromJS({
      forgetpassword: {
        error,
      },
    });
    expect(selectErrorSelector(mockedState)).toEqual(error);
  });
});
