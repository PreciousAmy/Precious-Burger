import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarEle';

const Navbar = ( { toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)

        } else {
            setScrollNav(false)
        }
    };

   useEffect(() => {
       window.addEventListener('scroll', changeNav);
   }, []);

   const toggleBack = () => {
       scroll.scrollToBottom();
   }

  return (
    <>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleBack}>
                  Blink-Burger
              </NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">About </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='services'> Services </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='contact'> Contact </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='request'>Request </NavLinks>
                  </NavItem>
                  <NavBtn>
                      <NavBtnLink to='/signin'> Sign In</NavBtnLink>
                  </NavBtn>
              </NavMenu>
          </NavbarContainer>
      </Nav>
        
      
    </>
  )
}

export default Navbar
