/**
 * Created by Ber on 02/12/16.
 */
import React from 'react';

const UGBtnSubscribe = (props) => <button type="submit" className={`btn btn-default ${props.className}`}>
  {props.children}
</button>;

UGBtnSubscribe.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGBtnSubscribe;
