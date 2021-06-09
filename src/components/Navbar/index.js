import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

// function isLoggedIn() {
//   return localStorage.getItem("jwt");
// }

// function isLoggedOut() {
//   return !localStorage.getItem("jwt");
// }
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
       
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/MemeGenerator' activeStyle>
            Meme Generator
          </NavLink>
          <NavLink to='/memes' activeStyle>
            Memes
          </NavLink>
       
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
