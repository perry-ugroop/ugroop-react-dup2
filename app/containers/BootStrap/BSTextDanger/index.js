/**
 * Created by Yang on 18/11/16.
 */
import React from 'react';
const BSTextDanger = (props) => <div className={`text-danger ${props.className}`} id={props.id}>
  {props.children}
</div>;

BSTextDanger.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
  id: React.PropTypes.any,
};

export default BSTextDanger;

