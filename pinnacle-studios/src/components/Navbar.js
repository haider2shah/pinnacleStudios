import React, { useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { ReactComponent as Nbg} from '../assets/navBackground.svg';
import { ReactComponent as X } from '../assets/xButton.svg';

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
        <div className={`${isOpen ? 'openNav' : 'contactPlusNav'}`}>
          <div className='button-container'>
            
          <Link to="/contactuspage">
            <button className='contact-us'>
              <h1>Contact Now</h1>
            </button>
          </Link>
          </div>
          <div className={`${isOpen ? 'callToAction' : ''}`}>
            <button className={`navbar-toggle ${(isOpen) ? 'x-show' : ''}`} 
            onClick={toggleNavbar}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <X className={`${(isOpen) ? 'xSvg' : 'xSVGhidden'}`}/>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'navbar-show' : 'navbar-hide'}`}>
          <div className="left">
          </div>
          <div className="border">
            <Nbg className='background'/>
          </div>
          <div className="right">
            <ul >
              <li><Link to="/" className="navbar-link">
                Home
              </Link></li>
              <li><Link to="/aboutuspage" className="navbar-link">
                About
              </Link></li>
              <li><Link to="/servicespage" className="navbar-link">
                Services
              </Link></li>
              <li><Link to="/contactuspage" className="navbar-link">
                  Contact
              </Link></li>
            </ul>
            <h1 className='navBottomRightHeading'>PINNACLE STUDIOS</h1>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;