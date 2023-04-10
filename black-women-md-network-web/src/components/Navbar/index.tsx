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
        <NavLogo to="/">Black Women MD Network</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/members">Members</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/community">Community</NavLink>
        </NavMenu>
        <NavBtn>
          <SignInBtnLink to='/signup'>Sign Up</SignInBtnLink>
        </NavBtn>
        <NavBtn>
          <JoinBtnLink to='/join'>Join</JoinBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;