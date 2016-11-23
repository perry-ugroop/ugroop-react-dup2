import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';

import { selectRepos, selectLoading, selectError } from 'containers/App/selectors';

import { selectUsername } from './selectors';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';
import MenuItemWrapper from '../BootStrap/UGMenuItemStyle';
import NavButtonCurve from '../BootStrap/BSNavBarButton';
import MenuItem from 'components/UGMenuItem';
import messages from './messages';
import { createStructuredSelector } from 'reselect';

export class UGMenuBar extends React.Component {
  openRoute = (route) => {
    this
      .props
      .changeRoute(route);
  };
  openUGHomePage = () => {
    this.openRoute('/');
  };
  openUGFeaturesPage = () => {
    this.openRoute('/features');
  };
  openUGPricingPage = () => {
    this.openRoute('/pricing');
  }
  openUGBlogPage = () => {
    this.openRoute('/blog');
  }
  openUGFaqPage = () => {
    this.openRoute('/faq');
  }
  openUGContactsPage = () => {
    this.openRoute('/contacts');
  }
  openRegistrationPage = () => {
    this.openRoute('/registration');
  }
  openLoginPage = () => {
    this.openRoute('/login');
  }

  render() {
    return (
      <ul>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openUGHomePage}>
            <FormattedMessage {...messages.homeButton} />
          </MenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openUGFeaturesPage}>
            <FormattedMessage {...messages.featuresButton} />
          </MenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openUGPricingPage}>
            <FormattedMessage {...messages.pricingButton} />
          </MenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openUGBlogPage}>
            <FormattedMessage {...messages.blogButton} />
          </MenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openUGFaqPage}>
            <FormattedMessage {...messages.faqButton} />
          </MenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openContactsPage}>
            <FormattedMessage {...messages.contactsButton} />
          </MenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <NavButtonCurve>
            <MenuItem handleRoute={this.openRegistrationPage}>
              <FormattedMessage {...messages.registerButton} />
            </MenuItem>
          </NavButtonCurve>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItem handleRoute={this.openLoginPage}>
            <FormattedMessage {...messages.loginButton} />
          </MenuItem>
        </MenuItemWrapper>
      </ul>
    );
  }
}

UGMenuBar.propTypes = {
  changeRoute: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(loadRepos());
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({ repos: selectRepos(), username: selectUsername(), loading: selectLoading(), error: selectError() });

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(UGMenuBar);
