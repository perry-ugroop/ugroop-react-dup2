/**
 * Created by Ber on 25/11/16.
 */
import React from 'react';
const BSFooter = (props) => <footer className={`row ${props.className}`}>
  {props.children}
</footer>;

BSFooter.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSFooter;
