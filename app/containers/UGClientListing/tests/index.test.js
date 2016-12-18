/* ************************************************************************** */
/*  Testing Unit for Client Listing */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow } from 'enzyme';
import UGClientListing from '../index';

describe('<UGClientListing />', () => {
  it('renders the Client Listing module', () => {
    const renderedComponent = shallow(<UGClientListing />);
    expect(renderedComponent.length).toBe(1);
  });

  // it('renders list', () => {
  //   const props = {
  //     url: 'http://www.ugroop.com.au',
  //     clientName: 'testClient',
  //     description: 'somedescription',
  //   };
  //   const wrapper = render(<UGClientListingBox {...props} />);
  //   const box = wrapper.find('a');
  //   expect(box.prop('href')).toBe(1);
  // });
});
