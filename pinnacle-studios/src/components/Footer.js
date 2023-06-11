import React from 'react';
import './footer.css'

const footer = ({isVisible}) => {
  return (
    <section className={`footer-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="footer-container">
            <div className="footer-content">
                <h5>© 2023 by Pinnaclestudio.co</h5>
            </div>
        </div>
    </section>
  );
};

export default footer;