/* ************************************************************************** */
/*  Created by Vince. Testing unit for breadcrumbs  (09-12-2016 )             */
/* ************************************************************************** */


import { shallow, mount } from 'enzyme';
import React from 'react';


import UGBreadcrumbs from '../index';
const children = (
  <div>Some Text</div>
);

const renderComponent = () => mount(
  <UGBreadcrumbs>
    { children }
  </UGBreadcrumbs>
);

describe('Feature items', () => {
  it('renders the UGBreadcrumbs', () => {
    const renderedComponent = shallow(<UGBreadcrumbs />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
