/**
 * Created by Ber on 24/11/16.
 */
import React from 'react';
import { Nav } from 'react-bootstrap';

const BSNavParentItem = (props) => <Nav pullRight className={`${props.className}`}>
  {props.children}
</Nav>;

BSNavParentItem.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSNavParentItem;
