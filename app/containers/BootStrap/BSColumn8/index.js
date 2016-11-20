/**
 * Created by Yun on 19/11/16.
 */
import React from 'react';

const BSColumn8 = (props) => <article className={`col-md-8 ${props.className}`}>
  {props.children}
</article>;

BSColumn8.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSColumn8;
