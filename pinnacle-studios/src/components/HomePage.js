import React from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Aboutus from './Aboutus.js';
import Services from './Services.js';
import Provide from './Provide.js';
import Business from './Business.js';
import Ad from './Ad.js';
import Conclusion from './Conclusion.js';
import Footer from './Footer.js';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="App">
        <div className='App-header'>
            <Navbar />
            <Hero />
            <Aboutus />
            <Services />
            <Provide />
            <Business />
            <Ad />
            <Conclusion />
            <Footer />
        </div>
    </div>
  );
};

export default HomePage;