/* ************************************************************************** */
/*  Testing Unit for Slider */
/*  Created by: Vincent Lobrigo (08/12/2-16)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGSlider from '../index';

describe('<UGSlider  />', () => {
  it('renders the Slider', () => {
    const renderedComponent = shallow(<UGSlider />);
    expect(renderedComponent.length).toBe(1);
  });
});
