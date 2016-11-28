/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
const BSCheckboxInline = (props) => <label htmlFor={props.htmlFor} className={`checkbox-inline ${props.className}`}>
  {props.children}
</label>;

BSCheckboxInline.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.any,
  htmlFor: React.PropTypes.any,
};

export default BSCheckboxInline;
