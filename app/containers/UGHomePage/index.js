/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import FeatureListing from 'containers/UGFeatureListing';
import ClientListing from 'containers/UGClientListing';
import Slider from 'components/UGSlider';
//import { selectShallLoginSuccessRedirect }from 'containers/App/Selectors';
export class UGHomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.context.router.push(route);
  };

  /**
   * Changed route to our Future LoginHome Page
   */
  openLoginHomePage = () => {
    this.openRoute('/Tour');
  };

  render() {
    if (this.context.authenticated) {
      this.openLoginHomePage();
    }

    return (
      <div>
        <Helmet
          title="uGroop Homepage"
          meta={[
            { name: 'description', content: 'This is a uGroop homepage implemented using React.js Boilerplate application framework' },
          ]}
        />
        <Slider />
        <FeatureListing />
        <ClientListing />

      </div>
    );
  }
}

export default UGHomePage;
