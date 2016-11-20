/**
 * Created by Yun on 17/11/16.
 */
import React from 'react';


const BSTextAreaFormControl = (props) => <textarea
  className={`form-control ${props.className}`}
  id={props.id}
  rows={props.rows}
  cols={props.cols}
  type={props.type}
  placeholder={props.placeholder}
  name={props.name}
  value={props.value}
  onChange={props.onChange}
  onBlur={props.onBlur}
/>;

BSTextAreaFormControl.propTypes = {
  className: React.PropTypes.any,
  id: React.PropTypes.any,
  rows: React.PropTypes.number,
  cols: React.PropTypes.number,
  name: React.PropTypes.any,
  placeholder: React.PropTypes.any,
  value: React.PropTypes.any,
  onChange: React.PropTypes.any,
  onBlur: React.PropTypes.any,
  type: React.PropTypes.any,
};

export default BSTextAreaFormControl;

