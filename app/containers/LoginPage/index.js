/**
 * Created by Yang on 25/10/16.
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Logo from '../../shareAssets/logo-ugroop.png';
import FacebookIcon from './assets/icon-facebook-transparent.png';
import GoolgePlusIcon from './assets/icon-googleplus-transparent.png';
import TwitterIcon from './assets/icon-twitter-transparent.png';
import YahooIcon from './assets/icon-yahoo-transparent.png';
import Img from 'components/Img';
import A from 'components/A';
import H1 from 'components/H1';
import styles from './styles.css';
/* import messages*/
import messages from './messages';
import { FormattedMessage } from 'react-intl';
/* import own login component*/
import LoginForm from './loginform';

export class LoginPage extends React.Component {

  createListItemContent(title, imgSrc) {
    const props = {};
    props.href = '#';
    props.title = title;
    return <A {...props} ><Img src={imgSrc} alt={title} width="50" height="50" /></A>;
  }

  render() {
    const listItems = [];
    const facebookLogin = this.createListItemContent('Sign In With Facebook', FacebookIcon);
    const twitterLogin = this.createListItemContent('Sign In With Twitter', TwitterIcon);
    const yahooLogin = this.createListItemContent('Sign In With Yahoo', YahooIcon);
    const googleLogin = this.createListItemContent('Sign In With Google', GoolgePlusIcon);
    listItems.push(facebookLogin);
    listItems.push(twitterLogin);
    listItems.push(yahooLogin);
    listItems.push(googleLogin);

    return (
      <article>
        <Helmet
          title="Login Page"
          meta={[
            { name: 'description', content: 'uGroop Login Page' },
          ]}
        />
        <div className={`${styles['ug-login-body']}`} >
          <div className={'row'}>
            <div className={`${styles['ug-login-panel']} ${styles['ug-flat-border']}`} >
              <div className={styles['ug-login-body']}>
                <H1 className={styles['ug-logo']}>
                  <Img src={Logo} alt="ügroop" />
                </H1>
                <div className={styles['ug-oauth-wrapper']}>
                  <H1 className={styles['ug-oauth-title']}>
                    <p><FormattedMessage {...messages.signinHeader} /></p>
                  </H1>
                  <ul className={styles['ug-oauth-icon-list']}>
                    <li className={styles['ug-facebook-oauth']}>{facebookLogin}</li>
                    <li className={styles['ug-twitter-oauth']}>{twitterLogin}</li>
                    <li className={styles['ug-yahoo-oauth']}>{yahooLogin}</li>
                    <li className={styles['ug-googleplus-oauth']}>{googleLogin}</li>
                  </ul>
                </div>
                <H1 className={styles['ug-or-oauth']}>
                  <p><span>OR</span></p>
                </H1>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default connect()(LoginPage);
