/**
 * Created by Yang on 25/10/16.
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Logo from '../../shareAssets/logo-ugroop.png';
import FacebookIcon from './assets/icon-facebook.png';
import GoolgePlusIcon from './assets/icon-google-plus.png';
import TwitterIcon from './assets/icon-twitter.png';

import Img from 'components/Img';
import List from 'components/List';
import ListItem from 'components/ListItem';
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
    const yahooLogin = this.createListItemContent('Sign In With Yahoo', TwitterIcon);
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
        <div className={`${styles.container} ${styles['ug-login-body']}`} >
          <div className={styles.row}>
            <div className={`${styles['ug-login-panel']} ${styles['ug-flat-border']}`} >
              <div className={styles['ug-login-body']}>
                <H1 className={styles['ug-logo']}>
                  <Img src={Logo} alt="ügroop" />
                </H1>
                <div className={styles['ug-oauth-wrapper']}>
                  <H1 className={styles['ug-oauth-title']}>
                    <p><FormattedMessage {...messages.signinHeader} /></p>
                  </H1>
                  <List
                    items={listItems}
                    component={ListItem}
                    listClassName={styles['ug-oauth-icon-list']}
                    listWrapperClassName={styles['ug-oauth-icon-list']}
                  />
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
