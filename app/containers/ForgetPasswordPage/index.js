/**
 * Created by Yang on 31/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../shareAssets/logo-ugroop.png';
import styles from './styles.css';
/* import messages*/
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import H1 from 'components/H1';
import { isEmptyString } from '../../utils/stringAdditions';
import A from 'components/A';
import { createStructuredSelector } from 'reselect';
import { selectEmail, selectError } from './selectors';
import { changeEmail, validEmail } from './actions';
import { push } from 'react-router-redux';

export class ForgetPasswordPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
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
      errorContent = (<div className={`${styles['text-danger']}`} role="alert">{this.props.error}</div>);
    }
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
                  <p><FormattedMessage {...messages.findAccountHeader} /></p>
                </H1>
              </div>
              <div className={styles['text-center']}>
                <p><FormattedMessage {...messages.forgetPasswordDescriptionPart1} /></p>
                <br />
                <FormattedMessage {...messages.forgetPasswordDescriptionPart2} />
              </div>
              <form>
                <div>
                  <span className={`${styles['input-group-addon']} ${styles['ug-flat-border']}`}>
                    <i className={`${styles.glyphicon} ${styles['glyphicon-envelope']}`}></i>
                  </span>
                  <input
                    id="Email"
                    type="text"
                    className={`${styles['form-control']} ${styles['ug-flat-border']}`}
                    name="Email"
                    placeholder={messages.emailPlaceHolder.defaultMessage}
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                    onBlur={this.props.validateEmail}
                  />
                  {errorContent}
                </div>
                <p className="ug-link-signup">Don't have an account?
                  <A href="" onClick={this.openRegistrationPage} id="signup_id"><FormattedMessage {...messages.signupLabel} /></A>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
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
    validateEmail: (evt) => dispatch(validEmail(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

ForgetPasswordPage.propTypes = {
  email: React.PropTypes.string,
  error: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
  onChangeEmail: React.PropTypes.func,
  validateEmail: React.PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordPage);
