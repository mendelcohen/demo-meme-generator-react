import React, {useState, useEffect} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


const Navbar = (props) => {
  
  function handleLogout() {
    localStorage.clear();
    props.setLoggedIn(false) 
  }

  if (props.loggedIn) {
   
  return (
    <>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/MemeGenerator' activeStyle>
            Meme Generator
          </NavLink>
          <NavLink to='/memes' activeStyle>
            Memes
          </NavLink>
        </NavMenu>
        <NavBtn >
          <NavBtnLink onClick={handleLogout} to='/sign-in'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );

  } else {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
  
        <NavMenu>

        </NavMenu>
        <NavBtn >
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
}
export default Navbar;
