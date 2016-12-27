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
import { selectEmail, selectError, selectResetEmailSent } from './selectors';
import { changeEmail, validEmail, submitForgetPassword } from './actions';
import { push } from 'react-router-redux';
import { Glyphicon, Row } from 'react-bootstrap';
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
import ContentWrapper from './ContentWrapper';
import { LoginLink } from 'react-stormpath';

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
    let content = '';
    if (this.props.resetPasswordSent) {
      content =
        (<AlertDanger role="alert">
          <FormattedMessage {...messages.resetEmailSuccssContent} />
          <LoginLink>Back to Login</LoginLink>
        </AlertDanger>);
    } else {
      let errorContent = null;
      if (!isEmptyString(this.props.error)) {
        errorContent = (<AlertDanger role="alert"><FormattedMessage {...messages.forgetPasswordDescriptionPart1} /></AlertDanger>);
      }
      content =
        (
          <ContentWrapper>
            <FPWrapper>
              <TitleH1>
                <p><FormattedMessage {...messages.findAccountHeader} /></p>
              </TitleH1>
            </FPWrapper>
            <BSTextCenter>
              <p><FormattedMessage {...messages.forgetPasswordDescriptionPart1} /></p>
              <p><FormattedMessage {...messages.forgetPasswordDescriptionPart2} /></p>
            </BSTextCenter>
            <form onSubmit={this.props.requestForgetPassword} >
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
          </ContentWrapper>);
    }

    return (
      <ForgetPasswordBody >
        <Row>
          <FPPanel >
            <FPPanelBody>
              <LogoH1>
                <Img src={Logo} alt="ügroop" />
              </LogoH1>
              {content}
            </FPPanelBody>
          </FPPanel>
        </Row>
      </ForgetPasswordBody>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  error: selectError(),
  resetPasswordSent: selectResetEmailSent(),
});


export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onBlurEmail: (evt) => dispatch(validEmail(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    requestForgetPassword: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitForgetPassword());
    },
    dispatch,
  };
}

ForgetPasswordPage.propTypes = {
  email: React.PropTypes.string,
  error: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
  onChangeEmail: React.PropTypes.func,
  onBlurEmail: React.PropTypes.func,
  requestForgetPassword: React.PropTypes.func,
  resetPasswordSent: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordPage);
