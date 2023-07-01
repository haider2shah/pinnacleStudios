import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { ReactComponent as Nbg} from '../assets/navBackground.svg';
import { ReactComponent as X } from '../assets/xButton.svg';
import { Swipeable } from 'react-swipeable';

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSwipeUp = () => {
    if(isOpen){
      setIsOpen(false)
    }
  }

  return (
    <Swipeable onSwipedUp={handleSwipeUp}>
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
            <button className='navbar-toggle' 
            onClick={toggleNavbar}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
            
          </div>
          <div className={`${isOpen ? 'navbar-show' : 'navbar-hide'}`}>
            <div className="left">
            </div>
            <div className="border">
              <Nbg className='background'/>
            </div>
            <div className="right">
              <ul >
                <div className="closePlusLink">
                  <li><Link to="/" className="navbar-link">
                    Home
                  </Link></li>
                  <div className="x-show" onClick={toggleNavbar}>
                    <X className={`${(isOpen) ? 'xSvg' : 'xSVGhidden'}`}/>
                  </div>
                </div>
                <li><Link to="/aboutuspage" className="navbar-link">
                  About us
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
    </Swipeable>
  );
};

export default Navbar;