import React from 'react';
import './business.css';
import image2 from '../assets/img2.png';
import {Link} from 'react-router-dom';

const business = ({isVisible}) => {
  return (
    <section className={`business-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="business-container">
            <div className="business-content">
                <div className="column-left">
                    <div className="figure">
                        <img src={image2} alt="business-decorative-figure" />
                    </div>
                </div>
                <div className="column-right">
                    <h1>Nobody deserves a cookie-cutter design solution.</h1>
                    <p>Our designs are the result of detailed strategies developed to serve our client's unique business needs.
                         Don't end up with a one-size-fits-all design, because IT DOESN'T WORK.</p>
                    <div className='button-container'>
                        <Link to="/contactuspage">
                            <button className='contact-us'>
                                Contact Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default business;