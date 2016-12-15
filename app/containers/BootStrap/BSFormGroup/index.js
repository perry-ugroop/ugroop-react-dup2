/**
 * Created by Yang on 18/11/16.
 */
import React from 'react';

const BSFormGroup = (props) => <div className={`form-group ${props.className}`}>
  {props.children}
</div>;

BSFormGroup.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSFormGroup;
