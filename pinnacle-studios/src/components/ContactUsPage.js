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
                            <div className="gradient-bg">
                                <div className="contact-info">
                                    <div className="email-info">
                                        <div className="icon">
                                        </div>
                                        <h1>info@pinnaclestudios.co</h1>
                                    </div>
                                    <div className="phone-info">
                                        <div className="icon"></div>
                                        <h1>+1 (408) 384 8602</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="white-bg"></div>
                            <div className="form-wrapper">
                                <h1 className='contact-us-form-heading'>Let's book a free 30 minutes consultation to learn more about your project</h1>
                                <form className="form">
                                    <div className="top-part">
                                        <input type="text" name="name" id="name" placeholder="Name" required/>
                                        <input type="text" name="email" id="email"  placeholder="Email" required/>
                                    </div>
                                    <div className="bot-part">
                                        <input type="text" name="company" id="company" placeholder="Company" required/>
                                        <input type="text" name='number' id='number' placeholder='Number' required/>
                                    </div>
                                    <textarea name="message" id='Message' placeholder='Message' required></textarea> 
                                    <button type="button">Book Free Consultation</button> 
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
