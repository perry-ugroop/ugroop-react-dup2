/**
 * Created by Yang on 18/11/16.
 */

import { css } from 'styled-components';
const BSClearFix = css`
  &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
    display: table; // 1
    content: " "; // 2
  }
`;

export default BSClearFix;
