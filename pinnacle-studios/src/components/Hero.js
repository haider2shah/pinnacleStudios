import './Hero.css';
import React from 'react';
import {ReactComponent as Arrow} from '../assets/arrow.svg';
import {ReactComponent as Heading} from '../assets/heroHeading.svg';
import {Link} from 'react-router-dom';


const Hero = () => {
  
  return (
    <section className='Hero-section'>
        <div className='Hero-container'>
            <div className='Hero-content'>
                <Heading className='headingSvg'/>
                <h3>A design studio for disruptive entrepreneurs</h3>
                <Link to="/aboutuspage">
                    <button className='contact-us'>
                        Contact Now
                    </button>
                </Link>
                
                <Link to="/servicespage">
                    <h5>Explore our services</h5>
                </Link>
                <Arrow className='arrowSvg'/>
            </div>
        </div>
    </section>
  );
};

export default Hero;