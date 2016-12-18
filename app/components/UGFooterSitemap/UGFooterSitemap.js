/**
 * Created by Ber on 25/11/16.
 */
import BSFooterSitemap from '../../containers/BootStrap/BSFooterSitemap';
import styled from 'styled-components';
import facebookIcon from './assets/icon-facebook.png';
import googleIcon from './assets/icon-google-plus.png';
import twitterIcon from './assets/icon-twitter.png';

const UGFooterSitemap = styled(BSFooterSitemap)`
  &&{
    background-color:#3F4759;
    color:#7C88A1;
    padding:70px 0 45px 0;
  };
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
  && ul.followus a{
    color:#7C88A1;
    margin-bottom:20px; 
    padding:16px 0 16px 26px; 
  };
  && a.icon-facebook{
    background:url(${facebookIcon}) left center no-repeat;
  };
  && a.icon-twitter{
    background:url(${twitterIcon}) left center no-repeat;
  };
  && a.icon-google-plus{
    background:url(${googleIcon}) left center no-repeat;
  };    
`;
export default UGFooterSitemap;
