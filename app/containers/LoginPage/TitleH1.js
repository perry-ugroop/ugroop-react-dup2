/**
 * Created by Yang on 17/11/16.
 */
import H1 from 'components/H1';
import styled, { css } from 'styled-components';

const title = css`
  border-top: 1px solid #F5F5F5;
  position: relative;
  text-align: center;
  margin-bottom: 30px;
`;

const OAuthTitleH1 = styled(H1)`
  ${title}
  > p {
    font-size: 70%;
    left: 0;
    margin-top: -16px;
    position: absolute;
    right: 0;
    > span {
    background-color: #FFF;
    padding: 0 15px;
    }
  }
`;

const OrTitleH1 = styled(H1)`
  ${title}
  > p {
    font-size: 70%;
    left: 0;
    margin-top: -17px;
    position: absolute;
    right: 0;
    > span {
     background-color:#fff;
     border:1px solid #f5f5f5;
     border-radius: 20px !important;
     color:#999;
     font-size:16px;
     margin-top:20px !important;
     padding:6px 7px;
     -moz-border-radius: 20px !important;
     -webkit-border-radius: 20px !important;
    }
  }
`;

export { OAuthTitleH1, OrTitleH1 };
