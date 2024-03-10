import React from 'react'
import { Nav, NavMenu, NavLink, NavBtn, NavBtnLink } from './NavbarElems';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to ="/">
            <h1>Logo</h1>
        </NavLink>
            <img src="" alt=""></img>
            <NavMenu>
                <NavLink to="/home" activeStyle>Home</NavLink>
                <NavLink to="/about" activeStyle>Who are we?</NavLink>
                <NavLink to="/events" activeStyle>Events</NavLink>
                <NavLink to="/blog" activeStyle>Blog</NavLink>
                <NavLink to="/contact" activeStyle>Contact</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin"></NavBtnLink>
            </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;
