import React from 'react';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import BSContainer from '../../containers/BootStrap/BSContainer';

function Footer() {
  return (
    <footer>
      <div><p></p></div>
      <BSContainer>
        <p><FormattedMessage {...messages.copyrightMessage} /></p>
        <button type="button" className={'btn btn-default goto-up'}>
          <div className={'glyphicon glyphicon-chevron-up'} aria-hidden="true"></div>
        </button>
      </BSContainer>
    </footer>
  );
}

export default Footer;

