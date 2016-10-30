import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { LoginForm } from '../loginform';

describe('<LoginForm />', () => {
  it('should render error message', () => {
    const errormessage = 'generated error message';
    const renderedComponent = shallow(
      <LoginForm error={errormessage} />
    );

    expect(renderedComponent.find('[role="alert"]')).to.have.length(1);
  });

  it('should render not error message', () => {
    const renderedComponent = shallow(
      <LoginForm />
    );

    expect(renderedComponent.find('[role="alert"]')).to.have.length(0);
  });
});
