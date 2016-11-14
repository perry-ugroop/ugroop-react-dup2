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
import H1 from 'components/H1';
import { isEmptyString } from '../../utils/stringAdditions';
import A from 'components/A';
import { createStructuredSelector } from 'reselect';
import { selectEmail, selectError } from './selectors';
import { changeEmail, validEmail } from './actions';
import { push } from 'react-router-redux';
import { Glyphicon } from 'react-bootstrap';

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
      errorContent = (<div className={`${'text-danger'}`} role="alert">{this.props.error}</div>);
    }
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
                  <p><FormattedMessage {...messages.findAccountHeader} /></p>
                </H1>
              </div>
              <div className={'text-center'}>
                <p><FormattedMessage {...messages.forgetPasswordDescriptionPart1} /></p>
                <br />
                <FormattedMessage {...messages.forgetPasswordDescriptionPart2} />
              </div>
              <form>
                <div>
                  <span className={`${'input-group-addon ug-flat-border'}`}>
                    <Glyphicon glyph="envelope" />
                  </span>
                  <input
                    id="Email"
                    type="text"
                    className={`${'form-control ug-flat-border'}`}
                    name="Email"
                    placeholder={messages.emailPlaceHolder.defaultMessage}
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                    onBlur={this.props.onBlurEmail}
                  />
                  {errorContent}
                </div>
                <p className="ug-link-signup">Don&apos;t have an account?
                  <A href="registration" onClick={this.openRegistrationPage} id="signup_id"><FormattedMessage {...messages.signupLabel} /></A>
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
