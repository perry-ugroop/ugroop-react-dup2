/**
 * Created by yunzhou on 20/11/2016.
 */
import React from 'react';

const CheckboxInput = (props) => <input
  id={props.id}
  type="checkbox"
  name={props.name}
  placeholder={props.placeholder}
  value={props.value}
  onChange={props.onChange}
  onBlur={props.onBlur}
>

</input>;

CheckboxInput.propTypes = {
  id: React.PropTypes.any,
  name: React.PropTypes.any,
  placeholder: React.PropTypes.any,
  value: React.PropTypes.any,
  onChange: React.PropTypes.any,
  onBlur: React.PropTypes.any,
};

export default CheckboxInput;
