/**
 * Created by Ber on 25/11/16.
 */
import BSNavParentItem from '../../containers/BootStrap/BSNavParentItem';
import styled from 'styled-components';

const UGNavParentItem = styled(BSNavParentItem)`
  &&{
  background:rgba(255,255,255,1) !important;
  margin-top:10px; 
  }
  && li.active{
      background: none !important;
    };
  && li.active a{
      background: none;
      color: #ef5c3c !important;
    };
  && a{
      background: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      color: #384153 !important;
      font-family: 'Titillium Web', sans-serif; 
      font-size: 86%;
      font-weight: 600;
      padding:15px 10px;
      text-transform:uppercase !important;      
    };   
  && a:hover{
      background: none !important;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      color: #ef5c3c !important; 
    };       
`;
export default UGNavParentItem;
