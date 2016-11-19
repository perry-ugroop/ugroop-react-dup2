/**
 * Created by Yang on 31/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
/* import components */
import LogoH1 from '../../components/LogoH1';
import Img from '../../components/Img';
import Logo from '../../shareAssets/logo-ugroop.png';
import RegisterForm from './registerform';
import RegisterBody from './RegisterBody';
import BSRow from '../BootStrap/BSRow';
import RegisterPanel from './RegisterPanel';
import RegisterPanelBody from './RegisterPanelBody';
import RegisterWrapper from './RegisterWrapper';
import { TitleH1 } from '../UGLoginPage/TitleH1';
export class RegisterPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <RegisterBody >
        <BSRow>
          <RegisterPanel wide>
            <RegisterPanelBody >
              <LogoH1>
                <Img src={Logo} alt="ügroop" />
              </LogoH1>
              <RegisterWrapper>
                <TitleH1>
                  <p><FormattedMessage {...messages.registerHeader} /></p>
                </TitleH1>
              </RegisterWrapper>
              <RegisterForm />
            </RegisterPanelBody>
          </RegisterPanel>
        </BSRow>
      </RegisterBody>
    );
  }
}

export default connect()(RegisterPage);
