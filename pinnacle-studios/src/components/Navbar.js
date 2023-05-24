import React, { useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [navScrollStyle, setNavScrollStyle] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const scrollThreshold = 20; // Define the scroll threshold in pixels

  //     if (scrollPosition > scrollThreshold) {
  //       setNavScrollStyle(true);
  //     } else {
  //       setNavScrollStyle(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);



  return (
    <nav className="navbar">
      <div className={`navbar-width ${className}`}>
        <div className="logo"><Link to="/">PINNACLE STUDIOS</Link></div>
        <div className="contactPlusNav">
          <div className='button-container'>
            <button className='contact-us'>Contact Now</button>
          </div>
          <div className='callToAction'>
            <button className={`navbar-toggle ${(isOpen) ? 'x-show' : ''}`} 
            onClick={toggleNavbar}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
          </div>
        </div>
        <ul className={`${isOpen ? 'navbar-show' : 'navbar-hide'}`}>
            <li><Link to="/">
              <a className="navbar-link" href="/">Home</a>
            </Link></li>
            <li><Link to="/aboutuspage">
              <a className="navbar-link" href="/about">About</a>
            </Link></li>
            <li><Link to="/servicespage">
              <a className="navbar-link" href="/services">Services</a>
            </Link></li>
            <li><Link to="/contactuspage">
                <a className="navbar-link" href="/contact">Contact</a>
            </Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;