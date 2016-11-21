import React from 'react';

import messages from './messages';
import styles from './styles.css';
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div><p></p></div>
      <div className={"container"}>
        <p><FormattedMessage {...messages.copyrightMessage} /></p>
        <button type="button" className={"btn btn-default goto-up"}>
          <div className={"glyphicon glyphicon-chevron-up"} aria-hidden="true"></div>
        </button>
      </div>
    </footer>
    );
}

export default Footer;

