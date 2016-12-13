/**
 * Created by yunzhou on 26/11/2016.
 */


import styled from 'styled-components';
import React from 'react';
const NewsFeedHeadTmp = (props) => <h4 className={`media-heading ${props.className}`}>
  {props.children}
</h4>;

NewsFeedHeadTmp.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};
const NewsFeedHead = styled(NewsFeedHeadTmp)`
  &&{
   color:#009;
   font-size:14px !important;
   font-weight: bold !important;
   margin-bottom:20px !important;
  }`;

export default NewsFeedHead;
