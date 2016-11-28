/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import FeatureListing from 'containers/UGFeatureListing';
import ClientListing from 'containers/UGClientListing';
import Slider from 'components/UGSlider';

export class UGHomePage extends React.Component {

  openUGHomePage = () => {
    this
      .props
      .dispatch(push('/'));
  };
  render() {
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

UGHomePage.propTypes = {
  dispatch: React.PropTypes.func,
};

// Wrap the component to inject dispatch and state into it
export default connect()(UGHomePage);
