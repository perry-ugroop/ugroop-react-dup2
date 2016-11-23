/* ************************************************************ */
/* Created by Vince 2016-11-23                                  */
/* Description: Container for logo/brand and navigation bar     */
/* ************************************************************ */

import React from 'react';

const BSNavHeader = (props) => <div className={'navbar-header'}>
  {props.children}
</div>;

BSNavHeader.propTypes = {
  children: React.PropTypes.any,
};

export default BSNavHeader;

