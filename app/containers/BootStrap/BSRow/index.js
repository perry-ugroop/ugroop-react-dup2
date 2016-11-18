/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
const BSRow = (props) => <div className={`row ${props.className}`}>
  {props.children}
</div>;

BSRow.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSRow;
