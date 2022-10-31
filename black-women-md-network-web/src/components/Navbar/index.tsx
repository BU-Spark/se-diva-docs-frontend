import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>  
        <Bars />
        <NavMenu>
          <NavLink to="/membership">Membership</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/community">Community</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/join'>Join</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;