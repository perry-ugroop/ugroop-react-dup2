/* *********************************************************** */
/* Created by Vince on 2016-11-22                              */
/* *********************************************************** */
import React from 'react';

const BSNavBrand = (props) => <a className={'navbar-brand'} href={props.url}>
  <img src={props.image} alt={props.alt} />
  {props.children}
</a>;

BSNavBrand.propTypes = {
  children: React.PropTypes.any,
  image: React.PropTypes.any,
  url: React.PropTypes.any,
  alt: React.PropTypes.any,
};

export default BSNavBrand;
