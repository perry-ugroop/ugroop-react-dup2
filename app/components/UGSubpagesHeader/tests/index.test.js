/* ************************************************************************** */
/*  Testing Unit for Subheader  */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGSubpagesHeader from '../index';

describe('<UGSubpagesHeader  />', () => {
  it('renders the Subpages Header', () => {
    const renderedComponent = shallow(<UGSubpagesHeader />);
    expect(renderedComponent.length).toBe(1);
  });
});
