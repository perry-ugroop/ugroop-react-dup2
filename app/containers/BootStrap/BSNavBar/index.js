/* *********************************************************** */
/* Created by Vince on 2016-11-22                              */
/* *********************************************************** */
import React from 'react';

const BSNavBar = (props) => <div className={'navbar-collapse collapse navbar-right'}>
  {props.children}
</div>;

BSNavBar.propTypes = {
  children: React.PropTypes.any,
};

export default BSNavBar;
