/**
 * Created by Yang on 31/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
/* import components */
import H1 from '../../components/H1';
import Img from '../../components/Img';
import Logo from '../../shareAssets/logo-ugroop.png';
import RegisterForm from './registerform';

export class RegisterPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`${'container ug-login-body'}`} >
        <div className={'row'}>
          <div className={`${'ug-login-panel ug-flat-border'}`} >
            <div className={'ug-login-body'}>
              <H1 className={'ug-logo'}>
                <Img src={Logo} alt="ügroop" />
              </H1>
              <div className={'ug-oauth-wrapper'}>
                <H1 className={'ug-oauth-title'}>
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
