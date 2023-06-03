import './aboutUs.css';
import React from 'react';
import {ReactComponent as ReactLogo} from '../assets/about-us.svg';
import {Link} from 'react-router-dom';

const aboutUs = () => {
  return (
    <section className='aboutUs-section'>
        <div className='aboutUs-container'>
            <div className='aboutUs-content'>
                <div className='column-left'>

                    <h1>
                        Most brands struggle to reach their full potential
                    </h1>
                    <p>
                        Inconsistent branding is one of the major reasons brands fail to achieve its potential.
                         Developing a brand strategy, and a brand identity system can solve this problem.
                    </p>
                    <div className="button-container">
                        <Link to="/contactuspage">
                            <button className='contact-us'>
                                Contact Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='column-right'>
                    <div className="figure">
                        <ReactLogo />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default aboutUs;
