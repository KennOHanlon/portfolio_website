import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements'
import githubIcn from './github-icn.png';
import linkedInIcn from './linkedin-icn.png';
import personalLogo from './fresh-tech-ko.png';
import navBackground from './woodgrain.png';
import '../index.css'
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <>
    <Nav>
      {/* <Bars /> */}
      <div className = "nav">
        <div className='inner-nav'>
            <div className='nav-container-left'>
              <a href='/'>
               <img src={personalLogo} alt='Personal Logo Link' className='logo-img' />  
              </a> 
            <NavMenu>
              <NavLink to='/about' activeStyle>
                About
              </NavLink>
              <NavLink to='/experience' activeStyle>
                Experience
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            </div>
            {/* <img className="background-image" src={navBackground} alt='woodgrain' /> */}
          
          <div className='nav-container-right'>
            <a href='https://github.com/KennOHanlon' target='_blank' className='icn-link'>
              <img src={githubIcn} alt='GitHub Account Link' className='icn-img'/>
            </a>
            <a href='https://www.linkedin.com/in/kenneth-o-hanlon-a76364a1/' target='_blank' className='icn-link'>
              <img src={linkedInIcn} alt='LinkedIn Account Link' className='icn-img'/>
            </a>
            
            <NavBtn>
              <NavBtnLink to='/contact-me' activeStyle>Contact Me</NavBtnLink>
            </NavBtn>
            <MobileNav className='hamburger' />
            {/* <Bars /> */}
          </div>
        </div>
      </div>
    </Nav>
  </>
);
};

export default Navbar;