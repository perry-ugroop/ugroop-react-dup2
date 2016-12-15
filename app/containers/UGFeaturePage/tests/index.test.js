/* ************************************************************************** */
/*  Testing Unit for Feature Page */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGFeaturePage from '../index';
import UGBreadcrumbs from '../../../components/UGBreadcrums';
import UGSubpagesHeader from '../../../components/UGSubpagesHeader';
import UGSubpagesContainer from '../../../components/UGSubpagesContainer';

describe('<UGFeaturePage  />', () => {
  it('renders the feature page', () => {
    const renderedComponent = shallow(<UGFeaturePage />);
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

  it('should render the subpage header ', () => {
    const renderedComponent = shallow(<UGSubpagesContainer />);
    expect(renderedComponent.length).toBe(1);
  });
});
