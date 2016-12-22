/* ************************************************************************** */
/*  Testing Unit for Contact Page */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGContactPage from '../index';

import UGBreadcrumbs from '../../../components/UGBreadcrums';
import UGSubpagesHeader from '../../../components/UGSubpagesHeader';
import UGSubpagesContainer from '../../../components/UGSubpagesContainer';

describe('<UGSubpagesHeader  />', () => {
  it('renders the contact page', () => {
    const renderedComponent = shallow(<UGContactPage />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should render the breadcrumbs ', () => {
    const renderedComponent = shallow(<UGBreadcrumbs />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should render the subpage header ', () => {
    const renderedComponent = shallow(<UGSubpagesHeader />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should render the container', () => {
    const renderedComponent = shallow(<UGSubpagesContainer />);
    expect(renderedComponent.length).toBe(1);
  });
});
