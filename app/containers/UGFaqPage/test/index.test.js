/* ************************************************************************** */
/*  Testing Unit for FAQ Page  */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGFaqPage from '../index';

describe('<UGFaqPage  />', () => {
  it('renders the frequently asked questions page', () => {
    const renderedComponent = shallow(<UGFaqPage />);
    expect(renderedComponent.length).toBe(1);
  });
});
