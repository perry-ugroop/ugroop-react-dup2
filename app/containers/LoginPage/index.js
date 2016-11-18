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
/* import messages*/
import messages from './messages';
import { FormattedMessage } from 'react-intl';
/* import own login component*/
import LoginForm from './loginform';
import LoginBody from './LoginBody';
import LoginPanel from './LoginPanel';
import LoginPanelBody from './LoginPanelBody';
import LogoH1 from './LogoH1';
import OAuthWrapper from './OAuthWrapper';
import { OAuthTitleH1, OrTitleH1 } from './TitleH1';
import List from './List';
import ListItem from './ListItem';

export class LoginPage extends React.Component {

  createListItemContent(title, imgSrc) {
    const props = {};
    props.href = '#';
    props.title = title;
    return <A {...props} ><Img src={imgSrc} alt={title} /></A>;
  }

  render() {
    const listItems = [];
    const facebookLogin = this.createListItemContent('Sign In With Facebook', FacebookIcon);
    const twitterLogin = this.createListItemContent('Sign In With Twitter', TwitterIcon);
    const yahooLogin = this.createListItemContent('Sign In With Yahoo', YahooIcon);
    const googleLogin = this.createListItemContent('Sign In With Google', GoolgePlusIcon);
    listItems.push({ content: facebookLogin, icon: 'facebook' });
    listItems.push({ content: twitterLogin, icon: 'twitter' });
    listItems.push({ content: yahooLogin, icon: 'yahoo' });
    listItems.push({ content: googleLogin, icon: 'google' });

    return (

      <article>
        <Helmet
          title="Login Page"
          meta={[
            { name: 'description', content: 'uGroop Login Page' },
          ]}
        />
        <LoginBody>
          <div className={'row'}>
            <LoginPanel>
              <LoginPanelBody>
                <LogoH1>
                  <Img src={Logo} alt="ügroop" />
                </LogoH1>
                <OAuthWrapper>
                  <OAuthTitleH1>
                    <p><FormattedMessage {...messages.signinHeader} /></p>
                  </OAuthTitleH1>
                  <List component={ListItem} items={listItems}></List>
                </OAuthWrapper>
                <OrTitleH1>
                  <p><FormattedMessage {...messages.orHeader} /></p>
                </OrTitleH1>
                <LoginForm />
              </LoginPanelBody>
            </LoginPanel>
          </div>
        </LoginBody>
      </article>
    );
  }
}

export default connect()(LoginPage);
