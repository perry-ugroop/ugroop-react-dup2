/**
 * Created by Yun on 22/11/16.
 */
import addTourReducer from '../reducer';
import {
  changeTourName, changeDestCity,
  validText,
  validDate,
} from '../actions';
import {
  ADDTOUR_STATEKEY,
  ADDTOURERROR_STATEKEY,
  TOURNAME_FIELD,
  DESTCITY_FIELD,
  DEPARTDATE_FIELD,
  ARRIVALDATE_FIELD,
} from '../constants';
import validationRule from '../../../utils/validationrule';
import messages from '../messages';
import { fromJS } from 'immutable';

describe('addTourReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      addTourState: fromJS({
        tourName: '',
        destCity: '',
        departDate: '',
        arrivalDate: '',
        participantFlag: '',
        tourDesc: '',
        tourPhoto: '',
      }),
      addTourStateError: fromJS({
        tourNameError: '',
        destCityError: '',
        departDateError: '',
        arrivalDateError: '',
        tourPhotoError: '',
      }),
    });
  });

  it('should return the initial state', () => {
    expect(addTourReducer(undefined, {})).toEqual(state);
  });

  it('should handle the changeTourName action correctly', () => {
    const fixture = 'Syndey';
    const expectedResult = state.setIn([ADDTOUR_STATEKEY, TOURNAME_FIELD], fixture);
    expect(addTourReducer(state, changeTourName(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeDestCity action correctly', () => {
    const fixture = 'USA';
    const expectedResult = state.setIn([ADDTOUR_STATEKEY, DESTCITY_FIELD], fixture);
    expect(addTourReducer(state, changeDestCity(fixture))).toEqual(expectedResult);
  });

  it('should validate tour name correctly and no empty characters', () => {
    const text = '';
    const regExps = [validationRule.characterConstraints];
    const field = TOURNAME_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'tourNameError'], messages.cannotbeEmptyError.defaultMessage);
    expect(addTourReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });

  it('should validate tour name correctly and abound to the character rule', () => {
    const text = 'a';
    const regExps = [validationRule.characterConstraints];
    const field = TOURNAME_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'tourNameError'], validationRule.characterConstraints.description);
    expect(addTourReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });

  it('should validate dest city correctly and no empty characters', () => {
    const text = '';
    const regExps = [validationRule.characterConstraints];
    const field = DESTCITY_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'destCityError'], messages.cannotbeEmptyError.defaultMessage);
    expect(addTourReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });

  it('should validate dest city correctly and abound to the character rule', () => {
    const text = 'US';
    const regExps = [validationRule.characterConstraints];
    const field = DESTCITY_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'destCityError'], validationRule.characterConstraints.description);
    expect(addTourReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });

  it('should validate tour name correctly and abound to the character rule', () => {
    const text = 'Great Ocean Road 1D';
    const regExps = [validationRule.characterConstraints];
    const field = TOURNAME_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'tourNameError'], '');
    expect(addTourReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });

  it('should validate dest city correctly and abound to the character rule', () => {
    const text = 'SHANGHAI';
    const regExps = [validationRule.characterConstraints];
    const field = DESTCITY_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'destCityError'], '');
    expect(addTourReducer(state, validText({ text, field, regExps }))).toEqual(expectedResult);
  });

  it('should validate depart date correctly and no empty characters', () => {
    const date = '';
    const field = DEPARTDATE_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'departDateError'], messages.cannotbeEmptyError.defaultMessage);
    expect(addTourReducer(state, validDate({ date, field }))).toEqual(expectedResult);
  });

  it('should validate arrival date correctly and no empty characters', () => {
    const date = '';
    const field = ARRIVALDATE_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'arrivalDateError'], messages.cannotbeEmptyError.defaultMessage);
    expect(addTourReducer(state, validDate({ date, field }))).toEqual(expectedResult);
  });

  it('should validate arrival date before today', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const field = ARRIVALDATE_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'arrivalDateError'],
      messages.cannotbeBeforeCurrentDateError.defaultMessage).setIn([ADDTOUR_STATEKEY, 'arrivalDate'], date);
    expect(addTourReducer(state, validDate({ date, field }))).toEqual(expectedResult);
  });

  it('should validate depart date before today', () => {
    const date = new Date();
    date.setDate(date.getDate() - 5);
    const field = DEPARTDATE_FIELD;
    const expectedResult = state.setIn([ADDTOURERROR_STATEKEY, 'departDateError'],
      messages.cannotbeBeforeCurrentDateError.defaultMessage).setIn([ADDTOUR_STATEKEY, 'departDate'], date);
    expect(addTourReducer(state, validDate({ date, field }))).toEqual(expectedResult);
  });

  it('should pass arrival date 10 days after today', () => {
    const date = new Date();
    date.setDate(date.getDate() + 10);
    const field = ARRIVALDATE_FIELD;
    const expectedResult = state.setIn([ADDTOUR_STATEKEY, 'arrivalDate'], date);
    expect(addTourReducer(state, validDate({ date, field }))).toEqual(expectedResult);
  });

  it('should pass depart date on today', () => {
    const date = new Date();
    date.setDate(date.getDate());
    const field = DEPARTDATE_FIELD;
    const expectedResult = state.setIn([ADDTOUR_STATEKEY, 'departDate'], date);
    expect(addTourReducer(state, validDate({ date, field }))).toEqual(expectedResult);
  });
});
