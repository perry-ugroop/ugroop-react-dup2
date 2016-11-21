import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';

import { selectRepos, selectLoading, selectError } from 'containers/App/selectors';

import { selectUsername } from './selectors';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

// import RepoListItem from 'containers/RepoListItem';
// import List from 'components/List';
// import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';

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
    // let mainContent = null;

    // // Show a loading indicator when we're loading
    // if (this.props.loading) {
    //   mainContent = (<List component={LoadingIndicator} />);

    //   // Show an error if there is one
    // } else if (this.props.error !== false) {
    //   const ErrorComponent = () => (<ListItem item={'Something went wrong, please try again!'} />);
    //   mainContent = (<List component={ErrorComponent} />);

    //   // If we're not loading, don't have an error and there are repos, show the repos
    // } else if (this.props.repos !== false) {
    //   mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    // }
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
            <MenuItem handleRoute={this.openContactsPage}>
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
  // loading: React.PropTypes.bool,
  // error: React
  //   .PropTypes
  //   .oneOfType([React.PropTypes.object, React.PropTypes.bool]),
  // repos: React
  //   .PropTypes
  //   .oneOfType([React.PropTypes.array, React.PropTypes.bool]),
  // onSubmitForm: React.PropTypes.func,
  // username: React.PropTypes.string,
  // onChangeUsername: React.PropTypes.func,
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
