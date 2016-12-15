import React from 'react';
import CompanyLogo from './asset/logo-ugroop.png';
import { Navbar, NavItem } from 'react-bootstrap';
import UGNavParentItem from './UGNavParentItem';
import CustomNavBar from './CustomNavBar';
import UGNavBarBrand from './UGNavBarBrand';
import UGNavLogo from './UGNavLogo';
import { LinkContainer } from 'react-router-bootstrap';
import A from '../../components/A';

// import UGMenuBar from '../../containers/UGMenuBar';
function UGNavBar() {
  return (
    <CustomNavBar collapseOnSelect className="customnav">
      <Navbar.Header>
        <UGNavBarBrand>
          <A href={'https://www.ugroop.com'} alt="company logo" target="_blank">
            <UGNavLogo src={CompanyLogo} alt={'Company Logo'} />
          </A>
        </UGNavBarBrand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <UGNavParentItem pullRight>
          <LinkContainer to="/"><NavItem className="active" eventKey={1} href="">Home</NavItem></LinkContainer>
          <LinkContainer to="/features"><NavItem eventKey={2} href="">Features</NavItem></LinkContainer>
          <LinkContainer to="/pricing"><NavItem eventKey={3} href="">Pricing</NavItem></LinkContainer>
          <LinkContainer to="/blog"><NavItem eventKey={4} href="">Blog</NavItem></LinkContainer>
          <LinkContainer to="/faq"><NavItem eventKey={5} href="">FAQ</NavItem></LinkContainer>
          <LinkContainer to="/contacts"><NavItem eventKey={6} href="">Contact Us</NavItem></LinkContainer>
          <LinkContainer to="/registration"><NavItem eventKey={7} href="">Register</NavItem></LinkContainer>
          <LinkContainer to="/login"><NavItem eventKey={8} href="#">Sign In</NavItem></LinkContainer>
        </UGNavParentItem>
      </Navbar.Collapse>
    </CustomNavBar>
  );
}

export default UGNavBar;
