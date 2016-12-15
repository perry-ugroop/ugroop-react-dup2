/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';

const BSInputGroupAddOn = (props) => <span className={`input-group-addon ${props.className}`}>
  {props.children}
</span>;

BSInputGroupAddOn.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSInputGroupAddOn;
