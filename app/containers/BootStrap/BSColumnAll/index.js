/**
 * Created by Yun on 20/11/16.
 */
import React from 'react';

const BSColumnAll = (props) => <div className={`col-lg-12 ${props.className}`}>
  {props.children}
</div>;

BSColumnAll.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSColumnAll;
