/**
 * Created by Ber on 23/11/16.
 */
import React from 'react';
import { Navbar } from 'react-bootstrap';

const BSNavBar = (props) => <Navbar className={`navbar-fixed-top ${props.className}`}>
  {props.children}
</Navbar>;

BSNavBar.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSNavBar;
