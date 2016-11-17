import React from 'react';
import CompanyLogo from './asset/logo-ugroop.png';
import UGMenuBar from '../../containers/UGMenuBar';

function UGHeader() {
  return (
    <div className={"nav-wrapper"}>
      <nav className={"navbar navbar-default"} role={"navigation"}>
        <div className={"container"}>
          <div className={"navbar-header"}>
            <button
              type="button"
              className={"navbar-toggle"}
              data-toggle={"collapse"}
              data-target={"#navbar"}
              aria-expanded={"false"}
              aria-controls={"navbar"}
            >
              <span className={"sr-only"}>Toggle navigation</span>
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
            </button>
            <a className={"navbar-brand"} href={"https://www.ugroop.com"}>
              <img src={CompanyLogo} alt={"Company Logo"} />
            </a>
          </div>
          <div id="navbar" className={"navbar-collapse collapse navbar-right nav-admin"}>
            <UGMenuBar />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UGHeader;
