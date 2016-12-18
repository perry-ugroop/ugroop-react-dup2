import UGFeatureItem from '../index';

import { render } from 'enzyme';

import React from 'react';

describe('<UGFeatureItem />', () => {
  it('should render item of feature', () => {
    const renderedComponent = render(
      <UGFeatureItem />
    );
    expect(renderedComponent.find('div').length).toEqual(4);
  });
});
