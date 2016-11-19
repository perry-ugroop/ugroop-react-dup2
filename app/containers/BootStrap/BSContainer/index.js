/**
 * Created by Yang on 16/11/16.
 */
import React from 'react';

const BSContainer = (props) => <div className={`container ${props.className}`}>
  {props.children}
</div>;

BSContainer.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSContainer;
