/**
 * Created by Yang on 18/11/16.
 */
import React from 'react';

const BSColumnLG6 = (props) => <div className={`col-lg-6 ${props.className}`}>
  {props.children}
</div>;

BSColumnLG6.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSColumnLG6;
