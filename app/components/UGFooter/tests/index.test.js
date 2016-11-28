import UGFooter from '../index';
import UGContainer from '../UGContainer';
// import UGGotoUp from '../UGGotoUp';
import messages from '../messages';
import { FormattedMessage } from 'react-intl';

import { render } from 'enzyme';

import React from 'react';

describe('<UGFooter />', () => {
  it('should render item of UGFooter', () => {
    const renderedComponent = render(
      <UGFooter />
    );
    expect(renderedComponent.contains(
      <UGContainer>
        <p><FormattedMessage {...messages.licenseMessage} /></p>
      </UGContainer>
    )).toBe(true);
  });
});
