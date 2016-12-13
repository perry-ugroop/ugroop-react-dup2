import UGHeader from '../index';
import { shallow } from 'enzyme';
import React from 'react';

describe('Header items', () => {
  it('renders the main UGHeader', () => {
    const renderedComponent = shallow(<UGHeader />);
    expect(renderedComponent.length).toBe(1);
  });
});
