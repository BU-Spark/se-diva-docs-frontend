import React from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  SignInBtnLink,
  JoinBtnLink
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>  
        <NavLogo to="/">Black Women MD Netowrk</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/membership">Membership</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/community">Community</NavLink>
        </NavMenu>
        <NavBtn>
          <SignInBtnLink to='/signin'>Sign In</SignInBtnLink>
        </NavBtn>
        <NavBtn>
          <JoinBtnLink to='/join'>Join</JoinBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;