import './Hero.css';
import React from 'react';
import {ReactComponent as Arrow} from '../assets/arrow.svg';
import {Link} from 'react-router-dom';


const Hero = () => {
  
  return (
    <section className='Hero-section'>
        <div className='Hero-container'>
            <div className='Hero-content'>
                <h1>Helping <span className='underline you'>you</span> design a 
                    brand that <span className='underline matter'>matter</span>s.
                </h1>
                <h3>A design studio for disruptive entrepreneurs</h3>
                <Link to="/aboutuspage">
                    <button className='contact-us'>
                        Contact Now
                    </button>
                </Link>
                

                <h5>eXPLORe our services</h5>
                <Arrow />
            </div>
        </div>
    </section>
  );
};

export default Hero;