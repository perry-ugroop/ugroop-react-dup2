import {
  LOAD_LOGINSUCCESS,
} from '../constants';

import {

  loginAccountLoaded,
} from '../actions';

describe('App Actions', () => {
  describe('loginAccountLoaded', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_LOGINSUCCESS,
      };

      expect(loginAccountLoaded()).toEqual(expectedResult);
    });
  });
});
