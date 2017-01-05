import { isEmptyString, truncateAndToLowerCase } from '../stringAdditions';

describe('Test isEmptyString', () => {
  it('shall return true if value is undefined', () => {
    const value = undefined;
    expect(isEmptyString(value)).toBe(true);
  });
});

describe('Test truncateAndToLowerCase', () => {
  it('shall be call lower case and trim the string by giving regExp', () => {
    const inputString = 'Ugroop-175 Mills Steert, Alert Park, Melbourne';
    const expected = 'ugroop175millssteertalertparkmelbourne';
    const reg = new RegExp(/[\W_]+/g);
    const newstring = truncateAndToLowerCase(inputString, reg, 64);
    expect(newstring).toBe(expected);
  });
});

