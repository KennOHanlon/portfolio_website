import React, { useState } from 'react';
import './MobileNav.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      <button className="hamburger" onClick={toggleNav}>
        ☰
      </button>
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <button className="close" onClick={toggleNav}>✖</button>
          <ul>
            <li><a href="/" onClick={toggleNav}>Home</a></li>
            <li><a href="/about" onClick={toggleNav}>About</a></li>
            <li><a href="/experience" onClick={toggleNav}>Experience</a></li>
            <li><a href="/contact-me" onClick={toggleNav}>Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;