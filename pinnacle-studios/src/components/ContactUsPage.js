import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="App">
        <div className="App-header">
            <Navbar />
            <section className='ContactUsPage-section'>
                <div className="ContactUsPage-container">
                    <div className="ContactUsPage-content">
                        <div className="container">
                        <div class="gradient-bg"></div>
                        <div class="white-bg"></div>
                            <div className="form-wrapper">
                                <form className="form">
                                    <input type="text" name="name" id="name" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </div>
  );
};

export default ContactUsPage;
