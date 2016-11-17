/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
const BSInputGroup = (props) => <div className={`input-group ${props.className}`}>
  {props.children}
</div>;

BSInputGroup.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.any,
};

export default BSInputGroup;
