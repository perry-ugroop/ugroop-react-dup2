/**
 * Created by Yun on 03/12/16.
 */
import React from 'react';

const BSColumn4 = (props) => <div className={`col-lg-4 ${props.className}`}>
  {props.children}
</div>;

BSColumn4.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSColumn4;
