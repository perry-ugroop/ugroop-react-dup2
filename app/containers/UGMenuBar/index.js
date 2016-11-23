import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import MenuItem from 'components/UGMenuItem';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
export class UGMenuBar extends React.Component {

  openRoute = (route) => {
    this.props.changeRoute(route);
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
      <div className={'navbar-collapse collapse navbar-right nav-admin'}>
        <ul className={'nav navbar-nav'}>
          <li>
            <MenuItem className={'menuItem'} handleRoute={this.openUGHomePage}>
              <FormattedMessage {...messages.homeButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openUGFeaturesPage}>
              <FormattedMessage {...messages.featuresButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openUGPricingPage}>
              <FormattedMessage {...messages.pricingButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openUGBlogPage}>
              <FormattedMessage {...messages.blogButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openUGFaqPage}>
              <FormattedMessage {...messages.faqButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openUGContactsPage}>
              <FormattedMessage {...messages.contactsButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openRegistrationPage}>
              <FormattedMessage {...messages.registerButton} />
            </MenuItem>
          </li>
          <li>
            <MenuItem handleRoute={this.openLoginPage}>
              <FormattedMessage {...messages.loginButton} />
            </MenuItem>
          </li>
        </ul>
      </div>
    );
  }
}

UGMenuBar.propTypes = {
  changeRoute: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
});

export function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

/* Styles ==================================================================== */
/* const menuStyle = StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: '#111111',
  },
  menu: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: '#111111',
    padding: 20,
    paddingTop: 20,
  },
  menuItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    //lineHeight: parseInt(18 + (18 * 0.5)),
    fontWeight: '500',
    marginTop: 10,
    flex: 1,
    color: "#EEE"
  },
});
*/

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(UGMenuBar);
