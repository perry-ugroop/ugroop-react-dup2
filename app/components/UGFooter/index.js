import React from 'react';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import UGContainer from './UGContainer';
import UGFooterStyle from './UGFooterStyle';
import UGGotoUp from './UGGotoUp';

function UGFooter() {
  return (
    <UGFooterStyle>
      <UGContainer>
        <p><FormattedMessage {...messages.copyrightMessage} /></p>
        <UGGotoUp type="button" className={'btn btn-default'}>
          <div className={'glyphicon glyphicon-chevron-up'} aria-hidden="true"></div>
        </UGGotoUp>
      </UGContainer>
    </UGFooterStyle>
  );
}

export default UGFooter;

