/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
const BSButtonPrimaryBlock = (props) => <button className={`btn btn-primary btn-block ${props.className}`}>
  {props.children}
</button>;

BSButtonPrimaryBlock.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSButtonPrimaryBlock;
