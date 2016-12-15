/* ************************************************************************** */
/*  Testing Unit for Feature Page */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGFeaturePage from '../index';

describe('<UGFeaturePage  />', () => {
  it('renders the feature page', () => {
    const renderedComponent = shallow(<UGFeaturePage />);
    expect(renderedComponent.length).toBe(1);
  });
});
