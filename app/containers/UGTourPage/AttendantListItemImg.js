/**
 * Created by yunzhou on 26/11/2016.
 */


import styled from 'styled-components';
import React from 'react';
const AttendantListItemImg = styled.img`
  float: left; height: auto !important; margin-right:15px; width: 52px;
`;
AttendantListItemImg.propTypes = {
  src: React.PropTypes.string,
};
export default AttendantListItemImg;
