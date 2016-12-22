import React from 'react';

import { shallow } from 'enzyme';

import UGNavBar from '../index';
import UGNavLogo from '../UGNavLogo';
import CompanyLogo from '../asset/logo-ugroop.png';

const links = [
  { text: 'Home', route: '/' },
];

describe('<UGNavBar />', () => {
  it('should have a links attribute', () => {
    const renderedComponent = shallow(
      <UGNavBar links={links} />
    );
    expect(renderedComponent.unrendered.props.links).toBeDefined();
  });
  it('should have a valid links prop', () => {
    const renderedComponent = shallow(
      <UGNavBar links={links} />
    );
    expect(renderedComponent.unrendered.props.links).toEqual(links);
  });
  it('should contains correct UGNavLogo', () => {
    const renderedComponent = shallow(
      <UGNavBar links={links} />
    );
    expect(renderedComponent.find(UGNavLogo).prop('src')).toEqual(CompanyLogo);
  });
});

