import UGFooter from '../index';
import messages from '../messages';
import { FormattedMessage } from 'react-intl';

import { shallow } from 'enzyme';

import React from 'react';

describe('<UGFooter />', () => {
  it('should render item of UGFooter', () => {
    const renderedComponent = shallow(
      <UGFooter />
    );
    expect(renderedComponent.contains(
      <p><FormattedMessage {...messages.copyrightMessage} /></p>
    )).toBe(true);
  });
});
