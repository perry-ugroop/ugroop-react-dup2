/**
 * Created by Yang on 29/10/16.
 */
import { fromJS } from 'immutable';
import {
  selectLoginpage,
  selectUsername,
  selectPassword,
} from '../selectors';

describe('selectLoginpage', () => {
  const loginSelector = selectLoginpage();
  it('should select the login state', () => {
    const loginState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      login: loginState,
    });
    expect(loginSelector(mockedState)).toEqual(loginState);
  });
});

describe('selectUsername', () => {
  const selectUsernameSelector = selectUsername();
  it('should select the login state', () => {
    const username = 'mxstbr';
    const mockedState = fromJS({
      login: {
        username,
      },
    });
    expect(selectUsernameSelector(mockedState)).toEqual(username);
  });
});

describe('selectPassword', () => {
  const selectPasswordSelector = selectPassword();
  it('should select the login state', () => {
    const password = 'pw';
    const mockedState = fromJS({
      login: {
        password,
      },
    });
    expect(selectPasswordSelector(mockedState)).toEqual(password);
  });
});
