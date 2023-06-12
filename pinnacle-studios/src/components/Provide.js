import React from 'react';
import './provide.css';
import {ReactComponent as PhoneIcon} from '../assets/phone-icon.svg';
import {ReactComponent as MagGlassIcon} from '../assets/mag-glass-icon.svg';
import {ReactComponent as PlanIcon} from '../assets/plan-icon.svg';
import {ReactComponent as WorkIcon} from '../assets/work-icon.svg';
import {Link} from 'react-router-dom';

const provide = ({isVisible}) => {
  return (
    <section id='provide' className={`provide-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="provide-container">
            <div className="provide-content">
                <h1 className='provideHeading'>In 4 Simple Steps, you can take a desicion that gets you peace of mind.</h1>
                <div className="provide-icons">
                  <div className="icons">
                    <div className="icon" >
                      <PhoneIcon />
                    </div>
                    <h1>Consultation</h1>
                  </div>
                  <div className="icons">
                    <div className="icon" >
                      <MagGlassIcon />
                    </div>
                    <h1>Brand Audit</h1>
                  </div>
                  <div className="icons">
                    <div className="icon" >
                      <PlanIcon />
                    </div>
                    <h1>Customized plan</h1>
                  </div>
                  <div className="icons">
                    <div className="icon" >
                      <WorkIcon />
                    </div>
                    <h1>We get to work</h1>
                  </div>
                </div>
                <Link to="/contactuspage">
                  <button className='contact-us'>
                    <h1>Contact Now</h1>
                  </button>
                </Link>
                
            </div>
        </div>
    </section>
  );
};

export default provide;
