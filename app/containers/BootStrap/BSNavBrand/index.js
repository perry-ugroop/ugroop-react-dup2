/* *********************************************************** */
/* Created by Vince on 2016-11-22                              */
/* *********************************************************** */
import React from 'react';
import styled from 'styled-components';

const BSNavBrand = (props) => <a className={'navbar-brand'} href={props.url}>
  <BSNavBrandImage>
    <img src={props.image} alt={props.alt} />
  </BSNavBrandImage>
  {props.children}
</a>;

const BSNavBrandImage = styled.div` 
  height:auto;
  width:84%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
`;

BSNavBrand.propTypes = {
  children: React.PropTypes.any,
  image: React.PropTypes.any,
  url: React.PropTypes.any,
  alt: React.PropTypes.any,
};

export default BSNavBrand;
