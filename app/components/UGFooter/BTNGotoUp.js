/**
 * Created by Ber on 25/11/16.
 */
import React from 'react';

const BTNGotoUp = (props) => <button className={`${props.className}`}>
  {props.children}
</button>;

BTNGotoUp.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BTNGotoUp;
