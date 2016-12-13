/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
const BSButtonDefault = (props) => <button className={`btn btn-default ${props.className}`}>
  {props.children}
</button>;

BSButtonDefault.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSButtonDefault;
