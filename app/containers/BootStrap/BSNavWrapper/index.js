
import React from 'react';

const BSNavWrapper = (props) => <div className={`container ${props.className}`}>
  <nav className={'navbar yamm navbar-default navbar-fixed-top'} role={'navigation'}>
    <div className={'container'}>
      {props.children}
    </div>
  </nav>
</div>;


BSNavWrapper.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSNavWrapper;

