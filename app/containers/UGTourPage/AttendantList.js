/**
 * Created by yunzhou on 26/11/2016.
 */


import styled from 'styled-components';
import React from 'react';

const AttendantListTmp = (props) => <ul className={`clearfix ${props.className}`}>
  {props.children}
</ul>;

AttendantListTmp.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,

};

const AttendantList = styled(AttendantListTmp)`
  list-style: none; margin: 0 !important; padding: 0 !important;  position: relative;

`;
export default AttendantList;
