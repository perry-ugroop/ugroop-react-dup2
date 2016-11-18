import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import { isEmptyString } from '../../utils/stringAdditions';
import { changeUsername, changePassword } from './actions';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import Span from './Span';
import {
  selectUsername,
  selectPassword,
  selectError,
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
  render() {
    let errorContent = null;
    if (!isEmptyString(this.props.error)) {
      errorContent = (<AlertDanger role="alert">{this.props.error}</AlertDanger>);
    }
    return (
      <form >
        {errorContent}
        <InputGroup>
          <Span>
            <Glyphicon glyph="user" />
          </Span>
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
          <Span>
            <Glyphicon glyph="lock" />
          </Span>
          <Input
            id="login-password"
            type="password"
            name={messages.passwordLabel.defaultMessage}
            placeholder={messages.passwordPlaceholderLabel.defaultMessage}
            value={this.props.password}
            onChange={this.props.onChangePassword}
          />
        </InputGroup>
        <InputButton>{messages.signinButton.defaultMessage}</InputButton>
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
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  password: selectPassword(),
  error: selectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
