/**
 * Created by Yang on 2/11/16.
 */
import expect from 'expect';
import forgetPageReducer from '../reducer';
import {
  changeEmail,
  validEmail,
} from '../actions';
import defaultMessage from '../messages';
import { fromJS } from 'immutable';

describe('forgetPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      email: '',
      error: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(forgetPageReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the changeEmail action correctly', () => {
    const fixture = 'someEmail';
    const expectedResult = state.set('email', fixture);
    expect(forgetPageReducer(state, changeEmail(fixture))).toEqual(expectedResult);
  });
  it('should handle the validEmail action correctly', () => {
    const source = 'abcd123123';
    const errorMessage = defaultMessage.invalidEmailError.defaultMessage;
    const expectedResult = state
      .set('error', errorMessage)
      .set('email', source);
    expect(forgetPageReducer(state, validEmail(source))).toEqual(expectedResult);
  });
});
