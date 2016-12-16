import appReducer from '../reducer';
import { fromJS } from 'immutable';
import { loginAccountLoaded } from '../actions';
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should set current current user', () => {
    const fixture = 'someusername';
    const expectedResult = state.set('currentUser', fixture);
    expect(appReducer(state, loginAccountLoaded(fixture))).toEqual(expectedResult);
  });
});
