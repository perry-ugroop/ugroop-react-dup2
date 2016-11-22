/**
 * Created by Yun on 8/11/16.
 */


import {
  CHANGE_TOURNAME,
  CHANGE_DESTCITY,
  VALIDATE_DATE,
  VALIDATE_FIELD,
} from '../constants';

import {
  changeTourName,
  changeDestCity,
  validText,
  validDate,
} from '../actions';

describe('changeTourName', () => {
  it('should return the correct type and the passed tourName', () => {
    const fixture = 'Shanghai 1 Day';
    const expectedResult = {
      type: CHANGE_TOURNAME,
      tourName: fixture,
    };
    expect(changeTourName(fixture)).toEqual(expectedResult);
  });
});


describe('changeDestCity', () => {
  it('should return the correct type and the passed destCity', () => {
    const fixture = 'Rome';
    const expectedResult = {
      type: CHANGE_DESTCITY,
      destCity: fixture,
    };
    expect(changeDestCity(fixture)).toEqual(expectedResult);
  });
});

describe('validate text', () => {
  it('should return the correct type and the passed correct object', () => {
    const fixture = { text: 'xyz', regExps: ['', ''], field: 'field1' };
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

describe('validate date', () => {
  it('should return the correct type and the passed correct object', () => {
    const fixture = { date: '2015-01-02', field: 'datafield' };
    const { date, field } = fixture;
    const expectedResult = {
      type: VALIDATE_DATE,
      date,
      field,
    };
    expect(validDate(fixture)).toEqual(expectedResult);
  });
});

