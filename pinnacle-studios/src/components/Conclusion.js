import React from 'react';
import './conclusion.css';
import {Link} from 'react-router-dom';

const conclusion = () => {
  return (
    <section className="conclusion-section">
        <div className="conclusion-container">
            <div className="conclusion-content">
                <p>“Most entrepreneurs struggle to find a designer they can trust. 
                  They often pay a hefty amount for a beautiful-looking website 
                  that doesn't resonates with their customers at all. We help them 
                  design an effective brand identity system and a brand strategy 
                  tailored for their business, that we can use as the guiding 
                  principle for every design decision like designing an amazing 
                  website, branding collateral, and digital marketing campaigns. 
                  So entrepreneurs can focus on what they do the best, change the wORLd.”</p>
                <Link to="/contactuspage">
                  <button className='contact-us'>
                    <h1>Contact Now</h1>
                  </button>
                </Link>
                <h1 className='BrandName'>pINNACLe sTUDIOs</h1>
                <h2>A design studio for disruptive entrepreneurs. </h2>
            </div>
        </div>
    </section>
  );
};

export default conclusion;
