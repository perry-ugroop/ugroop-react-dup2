import React from 'react';
import CompanyLogo from './asset/logo-ugroop.png';
import { Navbar, NavItem } from 'react-bootstrap';
import UGNavParentItem from './UGNavParentItem';
import CustomNavBar from './CustomNavBar';
import UGNavBarBrand from './UGNavBarBrand';
import UGNavLogo from './UGNavLogo';
import Li from '../../components/Li';
import { LinkContainer } from 'react-router-bootstrap';
import { Authenticated, NotAuthenticated, LoginLink, LogoutLink } from 'react-stormpath';

// import UGMenuBar from '../../containers/UGMenuBar';
function UGNavBar(props) {
  const links = props.links;
  const navLists = links.map((link, index) =>
    <LinkContainer to={link.route} key={index}>
      <NavItem className={link.active}>{link.text}</NavItem>
    </LinkContainer>);

  return (
    <div>
      <CustomNavBar collapseOnSelect className="customnav">
        <Navbar.Header>
          <UGNavBarBrand>
            <a className="navbar-brand" href="https://www.ugroop.com">
              <UGNavLogo src={CompanyLogo} alt="Company Logo" />
            </a>
          </UGNavBarBrand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Authenticated>
            <UGNavParentItem pullRight >
              { navLists }
              <Li ><LogoutLink /></Li>
            </UGNavParentItem>
          </Authenticated>

          <NotAuthenticated>
            <UGNavParentItem pullRight >
              {navLists}
              <LinkContainer to="/registration" ><NavItem >Register</NavItem></LinkContainer>
              <Li><LoginLink /></Li>
            </UGNavParentItem>
          </NotAuthenticated>
        </Navbar.Collapse>
      </CustomNavBar>
    </div>
  );
}

UGNavBar.propTypes = {
  links: React.PropTypes.array,
};

export default UGNavBar;
