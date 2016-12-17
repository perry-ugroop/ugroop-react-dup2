import React from 'react';
import CompanyLogo from './asset/logo-ugroop.png';
import { Navbar, NavItem } from 'react-bootstrap';
import UGNavParentItem from './UGNavParentItem';
import CustomNavBar from './CustomNavBar';
import UGNavBarBrand from './UGNavBarBrand';
import UGNavLogo from './UGNavLogo';
import { LinkContainer } from 'react-router-bootstrap';

// import UGMenuBar from '../../containers/UGMenuBar';
function UGNavBar(props) {
  var links = props.links;
  var nav_lists = links.map(function (link, index) {
    var active = link.active ? "active" : "";

    return <LinkContainer to={link.route}>
      <NavItem className={active} eventKey={index+1} href="">{link.text}</NavItem>
    </LinkContainer>
  });

  return (
    <div>
      <CustomNavBar collapseOnSelect className="customnav">
        <Navbar.Header>
          <UGNavBarBrand>
            <a className={'navbar-brand'} href={'https://www.ugroop.com'}>
              <UGNavLogo src={CompanyLogo} alt={'Company Logo'} />
            </a>
          </UGNavBarBrand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <UGNavParentItem pullRight>
            {nav_lists}
          </UGNavParentItem>
        </Navbar.Collapse>
      </CustomNavBar>
    </div>
  );
}

export default UGNavBar;
