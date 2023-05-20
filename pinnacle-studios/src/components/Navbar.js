import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScrollStyle, setNavScrollStyle] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 20; // Define the scroll threshold in pixels

      if (scrollPosition > scrollThreshold) {
        setNavScrollStyle(true);
      } else {
        setNavScrollStyle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav className="navbar">
      <div className={`navbar-width ${navScrollStyle ? 'scrolled' : ''} ${className}`}>
        <div className="logo"><a href="/">pINNACLe sTUDIOs</a></div>
        <div className='callToAction'>

          <button className={`navbar-toggle ${(isOpen) ? 'x-show' : (!isOpen && !navScrollStyle) ? '' : 'no-icon'}`} 
          onClick={toggleNavbar}>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
          </button>
        </div>
        <ul className={`${isOpen ? 'navbar-show' : (!isOpen && navScrollStyle) ? 'inline-nav' : 'navbar-hide'}`}>
            <li><Link to="/">
              <a className="navbar-link" href="/">Home</a>
            </Link></li>
            <li><Link to="/aboutuspage">
              <a className="navbar-link" href="/about">About</a>
            </Link></li>
            <li><Link to="/servicespage">
              <a className="navbar-link" href="/services">Services</a>
            </Link></li>
            <li><a className="navbar-link" href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;