import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    font-family: 'Titillium Web', 'Helvetica Neue', Helvetica, Arial, sans-serif !import;
    height: 100%;
    width: 100%;
  }

  body.fontLoaded {
    font-family: 'Titillium Web', 'Helvetica Neue', Helvetica, Arial, sans-serif !import;
  }

  #app {
    background-color: rgba(245,245,245,1.00) !important;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Titillium Web', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
