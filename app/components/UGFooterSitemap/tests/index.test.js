import UGFooterSitemapStyle from '../UGFooterSitemapStyle';

import { render } from 'enzyme';

import React from 'react';

describe('<UGFooterSitemap />', () => {
  it('should render item of feature', () => {
    const renderedComponent = render(
      <UGFooterSitemapStyle />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
