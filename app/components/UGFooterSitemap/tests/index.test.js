import UGFooterSitemap from '../UGFooterSitemap';

import { render } from 'enzyme';

import React from 'react';

describe('<UGFooterSitemap />', () => {
  it('should render item of feature', () => {
    const renderedComponent = render(
      <UGFooterSitemap />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
