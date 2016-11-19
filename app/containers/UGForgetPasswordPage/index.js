/**
 * Created by Yang on 31/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../shareAssets/logo-ugroop.jpg';
/* import messages*/
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import { isEmptyString } from '../../utils/stringAdditions';
import A from 'components/A';
import LogoH1 from 'components/LogoH1';
import { createStructuredSelector } from 'reselect';
import { selectEmail, selectError } from './selectors';
import { changeEmail, validEmail } from './actions';
import { push } from 'react-router-redux';
import { Glyphicon } from 'react-bootstrap';
import ForgetPasswordBody from './ForgetPasswordBody';
import FPPanel from './ForgetPasswordPanel';
import FPPanelBody from './ForgetPasswordPanelBody';
import FPWrapper from './FPWrapper';
import { TitleH1 } from '../UGLoginPage/TitleH1';
import BSTextCenter from '../BootStrap/BSTextCenter';
import AddOnSpan from './AddOnSpan';
import Input from './Input';
import InputGroup from './InputGroup';
import FooterLinkSignUp from '../UGLoginPage/FooterLinkSignUp';
import AlertDanger from '../UGLoginPage/Alert';
import InputButton from '../UGLoginPage/InputButton';
import BSRow from '../BootStrap/BSRow';

export class ForgetPasswordPage extends React.Component {
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/registration'
   */
  openRegistrationPage = () => {
    this.openRoute('/registration');
  }

  render() {
    let errorContent = null;
    if (!isEmptyString(this.props.error)) {
      errorContent = (<AlertDanger role="alert">{this.props.error}</AlertDanger>);
    }
    return (
      <ForgetPasswordBody >
        <BSRow>
          <FPPanel >
            <FPPanelBody>
              <LogoH1>
                <Img src={Logo} alt="ügroop" />
              </LogoH1>
              <FPWrapper>
                <TitleH1>
                  <p><FormattedMessage {...messages.findAccountHeader} /></p>
                </TitleH1>
              </FPWrapper>
              <BSTextCenter>
                <p><FormattedMessage {...messages.forgetPasswordDescriptionPart1} /></p>
                <p><FormattedMessage {...messages.forgetPasswordDescriptionPart2} /></p>
              </BSTextCenter>
              <form>
                {errorContent}
                <InputGroup>
                  <AddOnSpan>
                    <Glyphicon glyph="envelope" />
                  </AddOnSpan>
                  <Input
                    id="Email"
                    type="text"
                    name="Email"
                    placeholder={messages.emailPlaceHolder.defaultMessage}
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                    onBlur={this.props.onBlurEmail}
                  />
                </InputGroup>
                <InputButton>{messages.continueButton.defaultMessage}</InputButton>
                <FooterLinkSignUp>Don&apos;t have an account?
                  <A href="registration" onClick={this.openRegistrationPage} id="signup_id"><FormattedMessage {...messages.signupLabel} /></A>
                </FooterLinkSignUp>
              </form>
            </FPPanelBody>
          </FPPanel>
        </BSRow>
      </ForgetPasswordBody>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  error: selectError(),
});


export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onBlurEmail: (evt) => dispatch(validEmail(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

ForgetPasswordPage.propTypes = {
  email: React.PropTypes.string,
  error: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
  onChangeEmail: React.PropTypes.func,
  onBlurEmail: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordPage);
