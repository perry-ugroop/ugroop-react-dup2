/**
 * Created by Yang on 7/11/16.
 */
import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { RegisterForm, mapDispatchToProps } from '../registerform';
import { ORGNAME_FIELD, ORGADDRESS_FIELD, FIRSTNAME_FIELD, LASTNAME_FIELD,
PASSWORD_FIELD, TELEPHONE_FIELD } from '../constants';
import validationRule from '../../../utils/validationrule';
import { changeOrgName, changeOrgAddress, changeFirstName, changeLastName,
changeWebsite, changeEmail, changeTelephone, changePassword,
changeRetypePassword, changeRole, validText, validReTypePassword } from '../actions';

describe('<Register />', () => {
  const orgError = 'org name error';
  const orgAddressError = 'org address error';
  const firstNameError = 'firstname error';
  const lastNameError = 'lname error';
  const telephoneError = 'telephone error';
  const emailError = 'email error';
  const passwordError = 'password error';
  const retypePasswordError = 'retypePassword error';

  const signupuserFixture = {};
  it('should render orgName error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm orgNameError={orgError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#orgNameError').length).toEqual(1);
  });
  it('should render orgAddress Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm orgAddressError={orgAddressError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#orgAddressError').length).toEqual(1);
  });
  it('should render firstName Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm firstNameError={firstNameError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#firstNameError').length).toEqual(1);
  });
  it('should render lastName Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm lastNameError={lastNameError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#lastNameError').length).toEqual(1);
  });
  it('should render telephone Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm telephoneError={telephoneError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#telephoneError').length).toEqual(1);
  });
  it('should render email Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm emailError={emailError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#emailError').length).toEqual(1);
  });
  it('should render password Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm passwordError={passwordError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#passwordError').length).toEqual(1);
  });
  it('should render reTypePassword Error', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RegisterForm retypePasswordError={retypePasswordError} signUpUser={signupuserFixture} />
      </IntlProvider>
    );
    expect(renderedComponent.find('#retypePasswordError').length).toEqual(1);
  });
});

describe('mapDispatchToProps', () => {
  describe('onChangeOrgName', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeOrgName).toExist();
    });

    it('should dispatch changeOrgName when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const orgname = 'school a';
      result.onChangeOrgName({ target: { value: orgname } });
      expect(dispatch).toHaveBeenCalledWith(changeOrgName(orgname));
    });
  });
  describe('onChangeOrgAddress', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeAddressName).toExist();
    });
    it('should dispatch changeOrgAddress when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const address = 'this is my address';
      result.onChangeAddressName({ target: { value: address } });
      expect(dispatch).toHaveBeenCalledWith(changeOrgAddress(address));
    });
  });
  describe('onChangeFirstName', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeFirstName).toExist();
    });
    it('should dispatch changeFirstName when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const firstName = 'myfirstname';
      result.onChangeFirstName({ target: { value: firstName } });
      expect(dispatch).toHaveBeenCalledWith(changeFirstName(firstName));
    });
  });
  describe('onChangeLastName', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeLastName).toExist();
    });
    it('should dispatch changeLastName when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const lastName = 'my last name';
      result.onChangeLastName({ target: { value: lastName } });
      expect(dispatch).toHaveBeenCalledWith(changeLastName(lastName));
    });
  });
  describe('onChangeWebsite', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeWebsite).toExist();
    });
    it('should dispatch changeWebsite when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const website = 'yahoo.com';
      result.onChangeWebsite({ target: { value: website } });
      expect(dispatch).toHaveBeenCalledWith(changeWebsite(website));
    });
  });
  describe('onChangeEmail', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeEmail).toExist();
    });
    it('should dispatch changeEmail when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const email = 'some@email.com';
      result.onChangeEmail({ target: { value: email } });
      expect(dispatch).toHaveBeenCalledWith(changeEmail(email));
    });
  });
  describe('onChangePhone', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangePhone).toExist();
    });
    it('should dispatch changeTelephone when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const email = 'some@email.com';
      result.onChangePhone({ target: { value: email } });
      expect(dispatch).toHaveBeenCalledWith(changeTelephone(email));
    });
  });
  describe('onChangePassword', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangePassword).toExist();
    });
    it('should dispatch changePassword when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const password = 'some@email.com';
      result.onChangePassword({ target: { value: password } });
      expect(dispatch).toHaveBeenCalledWith(changePassword(password));
    });
  });
  describe('onChangeRetypePassword', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeRetypePassword).toExist();
    });
    it('should dispatch changeReTypePassword when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const password = 'some@email.com';
      result.onChangeRetypePassword({ target: { value: password } });
      expect(dispatch).toHaveBeenCalledWith(changeRetypePassword(password));
    });
  });
  describe('changeRole', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeRole).toExist();
    });
    it('should dispatch changeRole when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const role = 'some@email.com';
      result.onChangeRole({ target: { value: role } });
      expect(dispatch).toHaveBeenCalledWith(changeRole(role));
    });
  });
  describe('onBlurOrgName', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurOrgName).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const orgName = 'some value';
      result.onBlurOrgName({ target: { value: orgName } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: orgName, regExps: [], field: ORGNAME_FIELD }));
    });
  });
  describe('onBlurOrgAddress', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurOrgAddress).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const fixture = 'some value';
      result.onBlurOrgAddress({ target: { value: fixture } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: fixture, regExps: [], field: ORGADDRESS_FIELD }));
    });
  });
  describe('onBlurFirstName', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurFirstName).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const fixture = 'some value';
      result.onBlurFirstName({ target: { value: fixture } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: fixture,
        regExps: [validationRule.nameValidation, validationRule.characterConstraints],
        field: FIRSTNAME_FIELD }));
    });
  });
  describe('onBlurLastName', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurLastName).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const fixture = 'some value';
      result.onBlurLastName({ target: { value: fixture } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: fixture,
        regExps: [validationRule.nameValidation, validationRule.characterConstraints],
        field: LASTNAME_FIELD }));
    });
  });
  describe('onBlurPhone', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurPhone).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const fixture = 'some value';
      result.onBlurPhone({ target: { value: fixture } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: fixture, regExps: [], field: TELEPHONE_FIELD }));
    });
  });
  describe('onBlurPassword', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurPassword).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const fixture = 'some value';
      result.onBlurPassword({ target: { value: fixture } });
      expect(dispatch).toHaveBeenCalledWith(validText({ text: fixture,
        regExps: [validationRule.passwordValidation],
        field: PASSWORD_FIELD }));
    });
  });
  describe('onBlurReTypePassword', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onBlurReTypePassword).toExist();
    });
    it('should dispatch validText when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const fixture = 'some value';
      result.onBlurReTypePassword({ target: { value: fixture } });
      expect(dispatch).toHaveBeenCalledWith(validReTypePassword(fixture));
    });
  });
});
