import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../../../components/UGSlider';
import UGHomePage from '../index';

describe('<UGHomePage />', () => {
  it('should render the Slider component', () => {
    const renderedComponent = shallow(
      <UGHomePage />
    );
    expect(renderedComponent.contains(
      <Slider />
    )).toBe(true);
  });
});
