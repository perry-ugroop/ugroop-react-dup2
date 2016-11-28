/**
 * Created by Yun on 22/11/16.
 */
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { AddTourForm, mapDispatchToProps } from '../addtourform';
/*
import { TOURNAME_FIELD, DESTCITY_FIELD, DEPARTDATE_FIELD, ARRIVALDATE_FIELD, TOURDESC_FIELD, PARTICIPANTFLAG_FIELD,
  TOURPHOTO_FIELD} from '../constants';
  */
import { TOURNAME_FIELD, DESTCITY_FIELD, DEPARTDATE_FIELD, ARRIVALDATE_FIELD } from '../constants';
import validationRule from '../../../utils/validationrule';
import { changeTourName, changeDestCity, validText, validDate } from '../actions';

describe('<AddATour />', () => {
  const tourNameErr = 'tour name error';
  const destCityErr = 'dest city error';
  const departDateErr = 'depart date error';
  const arrivalDateErr = 'arrival date error';

  it('should render tourName error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AddTourForm tourNameError={tourNameErr} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#tourNameError').length).toEqual(1);
  });

  it('should render destination city error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AddTourForm destCityError={destCityErr} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#destCityError').length).toEqual(1);
  });

  it('should render depart date error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AddTourForm departDateError={departDateErr} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#departDateError').length).toEqual(1);
  });

  it('should render arrival date error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AddTourForm arrivalDateError={arrivalDateErr} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#arrivalDateError').length).toEqual(1);
  });
});

describe('mapDispatchToProps', () => {
  describe('onChangeTourName', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeTourName).toBeDefined();
    });

    it('should dispatch changeTourName when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const tourName = 'Pairs 1 week';
      result.onChangeTourName({ target: { value: tourName } });
      expect(dispatch).toHaveBeenCalledWith(changeTourName(tourName));
    });
  });

  describe('onChangeDestCity', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeDestCity).toBeDefined();
    });

    it('should dispatch changeDestCity when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const destCity = 'Beijing';
      result.onChangeDestCity({ target: { value: destCity } });
      expect(dispatch).toHaveBeenCalledWith(changeDestCity(destCity));
    });
  });

  describe('onChangeArrivalDate', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeArrivalDate).toBeDefined();
    });

    it('should dispatch change arrival date when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const arrivalDate = new Date();
      result.onChangeArrivalDate(arrivalDate);
      expect(dispatch).toHaveBeenCalledWith(validDate({ date: arrivalDate, field: ARRIVALDATE_FIELD }));
    });
  });

  describe('onChangeDepartDate', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeDepartDate).toBeDefined();
    });

    it('should dispatch change depart date when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const departDate = new Date();
      result.onChangeDepartDate(departDate);
      expect(dispatch).toHaveBeenCalledWith(validDate({ date: departDate, field: DEPARTDATE_FIELD }));
    });
  });

  describe('onBlurTourName', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurTourName).toBeDefined();
    });
    it('should dispatch validText when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const tourName = '2d ride';
      result.onBlurTourName({ target: { value: tourName } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: tourName, regExps: [validationRule.characterConstraints], field: TOURNAME_FIELD }));
    });
  });

  describe('onBlurDestCity', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurDestCity).toBeDefined();
    });
    it('should dispatch validText when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const destCity = 'Perth';
      result.onBlurDestCity({ target: { value: destCity } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: destCity, regExps: [validationRule.characterConstraints], field: DESTCITY_FIELD }));
    });
  });

  describe('onBlurArrivalDate', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurArrivalDate).toBeDefined();
    });

    it('should dispatch blur arrival date when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const arrivalDate = new Date();
      result.onBlurArrivalDate({ target: { value: arrivalDate } });
      expect(dispatch).toHaveBeenCalledWith(validDate({ date: arrivalDate, field: ARRIVALDATE_FIELD }));
    });
  });

  describe('onBlurDepartDate', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurDepartDate).toBeDefined();
    });

    it('should dispatch blur depart date when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const departDate = new Date();
      result.onBlurDepartDate({ target: { value: departDate } });
      expect(dispatch).toHaveBeenCalledWith(validDate({ date: departDate, field: DEPARTDATE_FIELD }));
    });
  });
});
