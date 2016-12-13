/* ************************************************************************** */
/*  Testing Unit for Contact Page */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGContactPage from '../index';

describe('<UGSubpagesHeader  />', () => {
  it('renders the contact page', () => {
    const renderedComponent = shallow(<UGContactPage />);
    expect(renderedComponent.length).toBe(1);
  });
});
