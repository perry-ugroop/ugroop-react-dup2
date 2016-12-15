/**
 * Created by Yun on 20/11/16.
 */
import React from 'react';

const BSColumnHalf = (props) => <div className={`col-lg-6 col-sm-6 ${props.className}`}>
  {props.children}
</div>;

BSColumnHalf.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSColumnHalf;
