import React from 'react';
import { render } from 'enzyme';
import Slider from '../../../components/UGSlider';

describe('<Slider />', () => {
  it('should render the Slider component', () => {
    const renderedComponent = render(
      <Slider />
    );
    expect(renderedComponent.type()).toEqual('Slider');
  });
});
