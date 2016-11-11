/**
 * Created by Yang on 31/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styles from './styles.css';
import messages from './messages';
/* import components */
import H1 from '../../components/H1';
import Img from '../../components/Img';
import Logo from '../../shareAssets/logo-ugroop.png';
import RegisterForm from './registerform';

export class RegisterPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`${styles.container} ${styles['ug-login-body']}`} >
        <div className={styles.row}>
          <div className={`${styles['ug-login-panel']} ${styles['ug-flat-border']}`} >
            <div className={styles['ug-login-body']}>
              <H1 className={styles['ug-logo']}>
                <Img src={Logo} alt="ügroop" />
              </H1>
              <div className={styles['ug-oauth-wrapper']}>
                <H1 className={styles['ug-oauth-title']}>
                  <p><FormattedMessage {...messages.registerHeader} /></p>
                </H1>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(RegisterPage);
