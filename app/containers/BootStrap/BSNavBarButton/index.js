/* *********************************************************** */
/* Created by Vince on 2016-11-23                              */
/* *********************************************************** */
import React from 'react';

const BSNavBarButton = (props) => <div className={'navbar-btn nav-button curveside'}>
  {props.children}
</div>;

BSNavBarButton.propTypes = {
  children: React.PropTypes.any,
};

export default BSNavBarButton;
