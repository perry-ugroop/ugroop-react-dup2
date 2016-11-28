
import React from 'react';

const BSNavWrapper = (props) => <div className={`container ${props.className}`}>
  <div className={'nav-wrapper'}>
    <nav className={'navbar navbar-default'} role={'navigation'}>
      <div className={'container'}>
        <div className={'navbar-header'}>
          {props.children}
        </div>
      </div>
    </nav>
  </div>
</div>;

BSNavWrapper.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSNavWrapper;

