/* ************************************************************************** */
/* Created by Vince/Ber. Feature box in the homepage */
/*  **************************************************************************** */

import styled from 'styled-components';
import bgSubpages from './assets/bg-subpages-header.png';
import bgAroundTheWorldSubpages from './assets/bg-subpages-header-around-the-world.png';

const UGSubpagesHeaderWrapper = styled.div`
 &{
    background: url(${bgSubpages}) left top #0073CE;
    border-bottom: 3px solid #EF5B3C;
    margin-top: 20px;
    min-height: 155px;
    position: relative;
  }
  & .container{
    background: url(${bgAroundTheWorldSubpages}) right center no-repeat;
    min-height: 155px;    
  }
`;

export default UGSubpagesHeaderWrapper;
