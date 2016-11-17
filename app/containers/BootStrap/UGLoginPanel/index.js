/**
 * Created by Yang on 16/11/16.
 */
import styled from 'styled-components';
import { media } from '../../../utils/style-utils';


const UGLoginPanel = styled.div`
  background-color: #FFF;
  box-shadow: 0 0 5px #E4E4E4;
  -moz-box-shadow: 0 0 5px #E4E4E4;
  -webkit-box-shadow: 0 0 5px #E4E4E4;
  margin: 2% auto 7%;
  ${(props) => {
    if (props.wide) {
      return 'width: 600px';
    }
    return 'width: 400px';
  }}; 
  ${media.handheld`
    width: 100%;
  `}
   ${media.tablet`
    width: 100% !important;
  `}
`;

export default UGLoginPanel;
