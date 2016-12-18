/**
 * Created by Ber on 25/11/16.
 */
import BSFooterSitemap from '../../containers/BootStrap/BSFooterSitemap';
import styled from 'styled-components';

const UGFooterSitemapStyle = styled(BSFooterSitemap)`
  &&{
  background-color:#3F4759;
  color:#7C88A1;
  padding:70px 0 45px 0;
  }
  && h3{
  color:#FFF;
  font-family: 'Titillium Web', sans-serif; 
  margin-bottom:30px;
  };
  && ul{
  list-style:none;
  padding:0;
  };
  && li{
  margin-bottom:6px;  
  };  
  && p{
  color:#7C88A1;
  font-family: 'Titillium Web', sans-serif;
  }; 
  && a{
  color:#7C88A1;
  font-family: 'Titillium Web', sans-serif;
  margin-bottom:20px;  
  };       
  && a:hover{
  color:#fff;
  };
  && input.form-input-subscribe{
  background-color:#ACB9CF;
  border:none;
  color:#000 !important;
  font-family: 'Titillium Web', sans-serif; 
  font-size:100%;
    -webkit-border-radius: 0 !important;
     -moz-border-radius: 0 !important;
        border-radius: 0 !important;
  padding:20px;
  }; 
  && button.btn-subscribe{
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
  };          

`;
export default UGFooterSitemapStyle;
