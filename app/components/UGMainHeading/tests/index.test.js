import UGMainHeading from '../index';
import { shallow } from 'enzyme';
import React from 'react';

describe('Header items', () => {
  it('renders the UGMainHeading', () => {
    const renderedComponent = shallow(<UGMainHeading />);
    expect(renderedComponent.length).toBe(1);
  });
});
