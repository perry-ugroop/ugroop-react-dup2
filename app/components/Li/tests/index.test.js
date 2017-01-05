/**
 * Testing our link component
 */

import Li from '../index';

import { shallow } from 'enzyme';
import React from 'react';

const children = (<h1>Test</h1>);
const renderComponent = () => shallow(
  <Li>
    {children}
  </Li>
);

describe('<Li />', () => {
  it('should render a <li> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('li');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
