import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState({
    hero: false,
    aboutus: false,
    services: false,
    provide: false,
    business: false,
    ad: false,
    conclusion: false,
    footer: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const sections = {
        hero: document.getElementById('hero'),
        aboutus: document.getElementById('aboutus'),
        services: document.getElementById('services'),
        provide: document.getElementById('provide'),
        business: document.getElementById('business'),
        ad: document.getElementById('ad'),
        conclusion: document.getElementById('conclusion'),
        footer: document.getElementById('footer')
      };

      for (const section in sections) {
        if (sections.hasOwnProperty(section)) {
          const element = sections[section];

          if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

            setIsVisible(prevState => ({
              ...prevState,
              [section]: isVisible
            }));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className='App-header'>
        <Navbar/>
        <Hero />
        <Aboutus isVisible={isVisible.aboutus} />
        <Services isVisible={isVisible.services} />
        <Provide isVisible={isVisible.provide} />
        <Business isVisible={isVisible.business} />
        <Ad isVisible={isVisible.ad} />
        <Conclusion isVisible={isVisible.conclusion} />
        <Footer isVisible={isVisible.footer} />
      </div>
    </div>
  );
};

export default HomePage;