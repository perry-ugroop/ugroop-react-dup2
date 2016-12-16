/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import UGNavBar from 'components/UGNavBar';
import UGFooter from 'components/UGFooter';
import UGFooterSitemap from '../../components/UGFooterSitemap';
import { LINKS } from './navbar_define';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const AppContentWrapper = styled.div` 
  margin-top: 50px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

function App(props) {
  const links = LINKS;

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <UGNavBar links={links} />
      <AppContentWrapper>
        {React.Children.toArray(props.children)}
      </AppContentWrapper>
      <UGFooterSitemap />
      <UGFooter />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
