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

export class UGHomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

export default UGHomePage;
