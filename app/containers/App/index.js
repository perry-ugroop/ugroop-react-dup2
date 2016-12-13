/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
<<<<<<< Updated upstream

import UGNavBar from 'components/UGNavBar';
import UGFooter from 'components/UGFooter';
import UGFooterSitemap from '../../components/UGFooterSitemap';
import UGAppWrapper from '../BootStrap/UGAppWrapper';
import UGAppContentWrapper from '../BootStrap/UGAppContentWrapper';

=======
import UGNavBar from 'components/UGNavBar';
import UGFooterSitemap from 'components/UGFooterSitemap';
import UGFooter from 'components/UGFooter';
import styled from 'styled-components';
import Slider from '../../components/UGSlider';

const AppWrapper = styled.div`
  margin-top:50px;
  min-height: 100%;
`;
>>>>>>> Stashed changes


function App() {
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
<<<<<<< Updated upstream
      <UGAppContentWrapper>
        {React.Children.toArray(props.children)}
      </UGAppContentWrapper>
=======
      <Slider />
>>>>>>> Stashed changes
      <UGFooterSitemap />
      <UGFooter />
    </UGAppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

<<<<<<< Updated upstream
=======

// <div className={{ 'text-align': 'center' }}>
//         <ReCaptcha
//           sitekey="6Ldh9AwUAAAAAG5tjfsEGaTe0XL0hzb400U5Upwg"
//           onChange={onChange}
//           type="image"
//           theme="light"
//           grecaptcha={greCaptchaObject}
//         />
//       </div>
>>>>>>> Stashed changes
