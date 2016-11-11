import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import Button from 'components/Button';
import styles from './styles.css';
import { isEmptyString } from '../../utils/stringAdditions';
import { changeUsername, changePassword } from './actions';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectUsername,
  selectPassword,
  selectError,
} from './selectors';

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
    const buttonProps = {};
    buttonProps.children = messages.signinButton.defaultMessage;
    buttonProps.handleRoute = this.props.signInSubmit;
    if (!isEmptyString(this.props.error)) {
      errorContent = (<div className={`${styles.alert} ${styles['alert-danger']}`} role="alert">{this.props.error}</div>);
    }
    return (
      <form >
        {errorContent}
        <div className={`${styles['input-group']} ${styles['input-group-md']}`}>
          <span className={`${styles['input-group-addon']} ${styles['ug-flat-border']}`}>
            <i className={`${styles.glyphicon} ${styles['glyphicon-user']}`}></i>
          </span>
          <input
            id="login-username"
            type="text"
            className={`${styles['form-control']} ${styles['ug-flat-border']}`}
            name={messages.usernameLabel.defaultMessage}
            value={this.props.username}
            placeholder={messages.usernamePlaceholderLabel.defaultMessage}
            onChange={this.props.onChangeUsername}
          />
        </div>
        <div className={`${styles['input-group']} ${styles['input-group-md']}`}>
          <span className={`${styles['input-group-addon']} ${styles['ug-flat-border']}`}>
            <i className={`${styles.glyphicon} ${styles['glyphicon-lock']}`}></i>
          </span>
          <input
            id="login-password"
            type="password"
            className={`${styles['form-control']} ${styles['ug-flat-border']}`}
            name={messages.passwordLabel.defaultMessage}
            placeholder={messages.passwordPlaceholderLabel.defaultMessage}
            value={this.props.password}
            onChange={this.props.onChangePassword}
          />
        </div>
        <Button {...buttonProps} className="btn btn-primary btn-block ug-flat-border ug-btn-sign" />
        <div className="form-group clearfix ug-login-footer-link">
          <p className="ug-link-lost-password">
            <A href="forgetpassword" onClick={this.openForgetPasswordPage} id="forgetpassword_id"><FormattedMessage {...messages.forgetPasswordLabel} /></A>
          </p>
        </div>
        <p className="ug-link-signup">Don't have an account?
          <A href="registration" onClick={this.openRegistrationPage} id="signup_id"><FormattedMessage {...messages.signupLabel} /></A>
        </p>
      </form>
    );
  }
}

LoginForm.propTypes = {
  error: React.PropTypes.string,
  signInSubmit: React.PropTypes.func,
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
