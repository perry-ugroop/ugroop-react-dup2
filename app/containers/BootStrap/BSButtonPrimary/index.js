/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
const BSButtonPrimary = (props) => <button onClick={props.onClick} className={`btn btn-primary ${props.className}`}>
  {props.children}
</button>;

BSButtonPrimary.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
  onClick: React.PropTypes.func,
};

export default BSButtonPrimary;
