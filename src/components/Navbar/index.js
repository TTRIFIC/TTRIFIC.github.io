import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                <h1>Matthew Beckerman</h1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='experience'>Experience</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='education'>Education</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects'>Projects</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/contact'>Contact</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    
    </>
  );
};

export default Navbar;