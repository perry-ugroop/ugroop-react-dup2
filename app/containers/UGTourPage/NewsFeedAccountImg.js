/**
 * Created by yunzhou on 26/11/2016.
 */


import styled from 'styled-components';
import React from 'react';
const NewsFeedAccountImg = styled.img`
  width: 64px; height: 64px;
`;
NewsFeedAccountImg.propTypes = {
  src: React.PropTypes.string,
};
export default NewsFeedAccountImg;
