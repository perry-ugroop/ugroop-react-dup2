import React from 'react';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import UGContainer from './UGContainer';
import UGFooter from './UGFooter';
import UGGotoUp from './UGGotoUp';

function Footer() {
  return (
    <UGFooter>
      <UGContainer>
        <p><FormattedMessage {...messages.copyrightMessage} /></p>
        <UGGotoUp type="button" className={'btn btn-default'}>
          <div className={'glyphicon glyphicon-chevron-up'} aria-hidden="true"></div>
        </UGGotoUp>
      </UGContainer>
    </UGFooter>
  );
}

export default Footer;

