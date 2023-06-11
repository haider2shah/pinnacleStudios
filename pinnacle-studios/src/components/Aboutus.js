import './aboutUs.css';
import React from 'react';
import {ReactComponent as ReactLogo} from '../assets/about-us.svg';
import {Link} from 'react-router-dom';

const aboutUs = ({isVisible}) => {
  return (
    <section className="aboutUs-section">
        <section id='aboutus' className={`aboutUs-container`}>
            <div className={`fade-in aboutUs-content ${isVisible ? 'visible' : ''}`}>
                <div className={`fade-in column-left ${isVisible ? 'visible' : ''}`}>

                    <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        Most brands struggle to reach their full potential
                    </h1>
                    <p className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        Inconsistent branding is one of the major reasons brands fail to achieve its potential.
                         Developing a brand strategy, and a brand identity system can solve this problem.
                    </p>
                    <div className={`fade-in button-container ${isVisible ? 'visible' : ''}`}>
                        <Link to="/contactuspage">
                            <button className='contact-us'>
                                Contact Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={`fade-in column-right ${isVisible ? 'visible' : ''}`}>
                    <div className="figure">
                        <ReactLogo />
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
};

export default aboutUs;
