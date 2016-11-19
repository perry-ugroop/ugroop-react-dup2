/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';

const BSInputFormControl = (props) => <input
  className={`form-control ${props.className}`}
  id={props.id}
  type={props.type}
  name={props.name}
  placeholder={props.placeholder}
  value={props.value}
  onChange={props.onChange}
  onBlur={props.onBlur}
>
</input>;

BSInputFormControl.propTypes = {
  className: React.PropTypes.any,
  id: React.PropTypes.any,
  name: React.PropTypes.any,
  placeholder: React.PropTypes.any,
  value: React.PropTypes.any,
  onChange: React.PropTypes.any,
  onBlur: React.PropTypes.any,
  type: React.PropTypes.any,
};

export default BSInputFormControl;
