import React from 'react';
import CompanyLogo from './asset/logo-ugroop.png';
import UGMenuBar from '../../containers/UGMenuBar';
import BSNavWrapper from '../../containers/BootStrap/BSNavWrapper';

function UGHeader() {
  return (
    <BSNavWrapper>
      <button
        type="button"
        className={'navbar-toggle'}
        data-toggle={'collapse'}
        data-target={'#navbar'}
        aria-expanded={'false'}
        aria-controls={'navbar'}
      >
        <span className={'sr-only'}>Toggle navigation</span>
        <span className={'icon-bar'}></span>
        <span className={'icon-bar'}></span>
        <span className={'icon-bar'}></span>
      </button>
      <a className={'navbar-brand'} href={'https://www.ugroop.com'}>
        <img src={CompanyLogo} alt={'Company Logo'} />
      </a>

      <div id="navbar" className={'navbar-collapse collapse navbar-right nav-admin'}>
        <UGMenuBar />
      </div>
    </BSNavWrapper>
  );
}

export default UGHeader;
