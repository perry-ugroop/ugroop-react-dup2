/* ************************************************************************** */
/*  Testing Unit for Navigation Bar  */
/*  Created by: Vincent Lobrigo (08/12/2-16)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGNavBar from '../index';

describe('<UGNavBar  />', () => {
  it('renders the UGNavBar', () => {
    const renderedComponent = shallow(<UGNavBar />);
    expect(renderedComponent.length).toBe(1);
  });
});
