import React from 'react';
import CompanyLogo from './asset/logo-ugroop.png';
import UGMenuBar from '../../containers/UGMenuBar';
import BSNavWrapper from '../../containers/BootStrap/BSNavWrapper';
import BSNavBar from '../../containers/BootStrap/BSNavBar';
import BSNavBrand from '../../containers/BootStrap/BSNavBrand';
import BSNavCollapse from '../../containers/BootStrap/BSNavCollapse';
import BSNavHeader from '../../containers/BootStrap/BSNavHeader';

function UGHeader() {
  return (
    <BSNavWrapper>
      <BSNavHeader>
        <BSNavCollapse label="Toggle navigation" />
        <BSNavBrand url="https://www.ugroop.com" alt="Company Logo" image={CompanyLogo} />
      </BSNavHeader>
      <BSNavBar>
        <UGMenuBar />
      </BSNavBar>
    </BSNavWrapper>
  );
}

export default UGHeader;
