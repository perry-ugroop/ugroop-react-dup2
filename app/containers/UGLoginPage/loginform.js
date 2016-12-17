import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import { isEmptyString } from '../../utils/stringAdditions';
import { changeUsername, changePassword, submitLogin } from './actions';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import AddOnSpan from './AddOnSpan';
import {
  selectUsername,
  selectPassword,
  selectError,
  selectShallLoginSuccessRedirect,
} from './selectors';
import { Glyphicon } from 'react-bootstrap';
import AlertDanger from './Alert';
import InputGroup from './InputGroup';
import Input from './Input';
import InputButton from './InputButton';
import LoginFooter from './LoginFooter';
import FooterLinkSignUp from './FooterLinkSignUp';
import FooterLinkPassword from './FooterLinkPassword';

export class LoginForm extends React.Component {

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/forgetpassword'
   */
  openForgetPasswordPage = () => {
    this.openRoute('/forgetpassword');
  };

  /**
   * Changed route to '/registeration'
   */
  openRegistrationPage = () => {
    this.openRoute('/registration');
  }

  /**
   * Changed route to our Future LoginHome Page
   */
  openLoginHomePage = () => {
    this.openRoute('/addTour');
  }

  render() {
    let errorContent = null;
    if (!isEmptyString(this.props.error)) {
      errorContent = (<AlertDanger role="alert">{this.props.error}</AlertDanger>);
    }
    if (this.props.redirect) {
      this.openLoginHomePage();
    }
    return (
      <form onSubmit={this.props.submitLogin}>
        {errorContent}
        <InputGroup>
          <AddOnSpan>
            <Glyphicon glyph="user" />
          </AddOnSpan>
          <Input
            id="login-username"
            type="text"
            value={this.props.username}
            name={messages.usernameLabel.defaultMessage}
            placeholder={messages.usernamePlaceholderLabel.defaultMessage}
            onChange={this.props.onChangeUsername}
          />
        </InputGroup>
        <InputGroup>
          <AddOnSpan>
            <Glyphicon glyph="lock" />
          </AddOnSpan>
          <Input
            id="login-password"
            type="password"
            name={messages.passwordLabel.defaultMessage}
            placeholder={messages.passwordPlaceholderLabel.defaultMessage}
            value={this.props.password}
            onChange={this.props.onChangePassword}
          />
        </InputGroup>
        <InputButton><FormattedMessage {...messages.signinButton} /></InputButton>
        <LoginFooter>
          <FooterLinkPassword>
            <A href="forgetpassword" onClick={this.openForgetPasswordPage} id="forgetpassword_id"><FormattedMessage {...messages.forgetPasswordLabel} /></A>
          </FooterLinkPassword>
        </LoginFooter>
        <FooterLinkSignUp>Don&apos;t have an account?
          <A href="registration" onClick={this.openRegistrationPage} id="signup_id"><FormattedMessage {...messages.signupLabel} /></A>
        </FooterLinkSignUp>
      </form>
    );
  }
}

LoginForm.propTypes = {
  error: React.PropTypes.string,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
  onChangeUsername: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
  submitLogin: React.PropTypes.func,
  redirect: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  password: selectPassword(),
  error: selectError(),
  redirect: selectShallLoginSuccessRedirect(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    submitLogin: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitLogin());
    },
    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
