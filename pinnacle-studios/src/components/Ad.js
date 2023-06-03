import React from 'react';
import './ad.css';
import {ReactComponent as AdIcon} from '../assets/adIcon.svg';
import {Link} from 'react-router-dom';

const ad = () => {
  return (
    <section className="ad-section">
        <div className="ad-container">
            <div className="ad-content">
                <div className="left-column">
                    <h1>Turn your customers into your biggest supporters.</h1>
                    <p>Effective design is not just about aesthetics - it's about understanding the needs of your audience
                         and crafting a compelling story that resonates with them, 
                         so they can become your ambassadors.</p>
                    <div className='button-container'>
                        <Link to="/contactuspage">
                            <button className='contact-us'>
                                Contact Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="right-column">
                    <div className="figure">
                        <AdIcon />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ad;