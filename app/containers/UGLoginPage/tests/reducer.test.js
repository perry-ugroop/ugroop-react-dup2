/**
 * Created by Yang on 29/10/16.
 */
import loginReducer from '../reducer';
import {
  changeUsername,
  changePassword,
} from '../actions';
import { fromJS } from 'immutable';

describe('loginReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      username: '',
      password: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(loginReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the changeUsername action correctly', () => {
    const fixture = 'someusername';
    const expectedResult = state.set('username', fixture);
    expect(loginReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });
  it('should handle the changePassword action correctly', () => {
    const fixture = 'pw';
    const expectedResult = state.set('password', fixture);
    expect(loginReducer(state, changePassword(fixture))).toEqual(expectedResult);
  });
});
