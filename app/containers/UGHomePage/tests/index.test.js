/* ************************************************************************** */
/*  Testing Unit for Homepage  */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import { shallow, mount } from 'enzyme';

/* Ugroop defined components */
import UGHomePage from '../index';
import UGSlider from '../../../components/UGSlider';
import UGFeatureListing from '../../../containers/UGFeatureListing';
import UGClientListing from '../../../containers/UGClientListing';

/* Testing Codes */

describe('<UGHomepage  />', () => {
  it('renders the Homepage', () => {
    const renderedComponent = shallow(<UGHomePage />);
    expect(renderedComponent.length).toBe(1);
  });

  it('renders the Slider component', () => {
    const renderedHeaderElement = mount(<UGSlider />);
    expect(renderedHeaderElement.length).toBe(1);
  });

  it('should render the feature list', () => {
    const renderedHeaderElement = mount(<UGFeatureListing />);
    expect(renderedHeaderElement.length).toBe(1);
  });

  it('should render the client list', () => {
    const renderedHeaderElement = mount(<UGClientListing />);
    expect(renderedHeaderElement.length).toBe(1);
  });
});

/* End of testing testing */
