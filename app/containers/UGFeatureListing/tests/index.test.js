/* ************************************************************************** */
/*  Testing Unit for Feature Listing  */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGFeatureListing from '../index';

describe('<UGFeatureListing  />', () => {
  it('renders the feature listing', () => {
    const renderedComponent = shallow(<UGFeatureListing />);
    expect(renderedComponent.length).toBe(1);
  });
});
