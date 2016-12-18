/**
 * Created by Yang on 13/12/16.
 */
import { shallow } from 'enzyme';
import React from 'react';
import { RegisterPage } from '../index';
import ConnectedRegisterForm from '../registerform';
import ConnectedRegisterSuccess from '../registerSuccess';

describe('<RegisterPage />', () => {
  it('shall render RegisterSuccess', () => {
    const renderedComponent = shallow(
      <RegisterPage isRegisterSuccess />
    );
    expect(renderedComponent.find(ConnectedRegisterSuccess).length).toEqual(1);
  });
  it('shall render RegisterForm', () => {
    const renderedComponent = shallow(
      <RegisterPage />
    );
    expect(renderedComponent.find(ConnectedRegisterForm).length).toEqual(1);
  });
});
