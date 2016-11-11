/**
 * Created by Yang on 2/11/16.
 */
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { ForgetPasswordPage, mapDispatchToProps } from '../index';
import { IntlProvider } from 'react-intl';
import { changeEmail, validEmail } from '../actions';
import { push } from 'react-router-redux';

describe('<ForgetPasswordPage />', () => {
  it('should render error message', () => {
    const error = 'there is an error';
    const shadowForgetPassword = shallow(
      <ForgetPasswordPage error={error} />
    );
    expect(shadowForgetPassword.find('[role="alert"]').length).toEqual(1);
  });

  it('should link to /registeration', () => {
    const openRouteSpy = expect.createSpy();
    const openRoute = (dest) => {
      if (dest === '/registration') {
        openRouteSpy();
      }
    };

    const renderedComponent = mount(
      <IntlProvider locale="en">
        <ForgetPasswordPage changeRoute={openRoute} />
      </IntlProvider>
    );
    const button = renderedComponent.find('a').find('#signup_id');
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeEmail', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeEmail).toExist();
      });

      it('should dispatch changeEmail when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const email = 'mxstbr';
        result.onChangeEmail({ target: { value: email } });
        expect(dispatch).toHaveBeenCalledWith(changeEmail(email));
      });
    });

    describe('validEmail', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.onBlurEmail).toExist();
      });

      it('should dispatch validemail when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const email = 'mxstbr';
        result.onBlurEmail({ target: { value: email } });
        expect(dispatch).toHaveBeenCalledWith(validEmail(email));
      });
    });
  });

  describe('changeRoute', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.changeRoute).toExist();
    });

    it('should dispatch push when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const route = '/';
      result.changeRoute(route);
      expect(dispatch).toHaveBeenCalledWith(push(route));
    });
  });
});
