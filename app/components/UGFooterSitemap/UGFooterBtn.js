/**
 * Created by Ber on 03/12/16.
 */

import styled from 'styled-components';
import UGBtnSubscribe from './UGBtnSubscribe';

const UGFooterBtn = styled(UGBtnSubscribe)`
  &&{
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    border-radius: 0 !important;
    background-color:#252E3E;
    border:none;
    color:#fff;
    font-family: 'Titillium Web', sans-serif;
    font-size:100%;
    font-weight:600;
    padding:10px 30px;
    text-transform:uppercase; 
  }
`;
export default UGFooterBtn;
