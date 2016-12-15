/**
 * Created by Ber on 24/11/16.
 */
import React from 'react';
import { Navbar } from 'react-bootstrap';

const BSNavBarBrand = (props) => <Navbar.Brand className={`${props.className}`}>
  {props.children}
</Navbar.Brand>;

BSNavBarBrand.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSNavBarBrand;
