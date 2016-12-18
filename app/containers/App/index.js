/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import UGNavBar from 'components/UGNavBar';
import UGFooter from 'components/UGFooter';
import UGFooterSitemap from '../../components/UGFooterSitemap';
import UGAppWrapper from '../BootStrap/UGAppWrapper';
import UGAppContentWrapper from '../BootStrap/UGAppContentWrapper';

function App(props) {
  return (
    <UGAppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <UGNavBar />
      <UGAppContentWrapper>
        {React.Children.toArray(props.children)}
      </UGAppContentWrapper>
      <UGFooterSitemap />
      <UGFooter />
    </UGAppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
