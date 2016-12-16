import React from 'react';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import UGContainer from './UGContainer';
<<<<<<< Updated upstream
import UGFooterStyle from './UGFooterStyle';
=======
import UGFooter from './UGFooter';
>>>>>>> Stashed changes
import UGGotoUp from './UGGotoUp';

function UGFooter() {
  return (
<<<<<<< Updated upstream
    <UGFooterStyle>
=======
    <UGFooter>
>>>>>>> Stashed changes
      <UGContainer>
        <p><FormattedMessage {...messages.copyrightMessage} /></p>
        <UGGotoUp type="button" className={'btn btn-default'}>
          <div className={'glyphicon glyphicon-chevron-up'} aria-hidden="true"></div>
        </UGGotoUp>
      </UGContainer>
<<<<<<< Updated upstream
    </UGFooterStyle>
=======
    </UGFooter>
>>>>>>> Stashed changes
  );
}

export default UGFooter;

