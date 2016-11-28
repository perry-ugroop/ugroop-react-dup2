/**
 * Created by Vince on 28/11/16.
 */
import React from 'react';

const BSColumn6 = (props) => <div className={`col-md-3 ${props.className}`}>
  {props.children}
</div>;

BSColumn6.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSColumn6;
