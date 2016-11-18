/**
 * Created by Yang on 18/11/16.
 */
import React from 'react';

const BSTextCenter = (props) => <div className={`text-center ${props.className}`}>
  {props.children}
</div>;

BSTextCenter.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSTextCenter;
