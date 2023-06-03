import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './ContactUsPage.css';
import { ReactComponent as PhoneIcon } from '../assets/phoneIcon.svg';
import { ReactComponent as MailIcon } from '../assets/mailIcon.svg';
import axios from "axios";

const ContactUsPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMsssage] = useState("")

    submit = async(e) => {
        e.prevventDefault()

        try{
            await axios.post("http://localhost:8000", {
                name,
                email,
                company,
                number,
                message
            })
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="App">
            <div className="App-header">
                <Navbar />
                <section className='ContactUsPage-section'>
                    <div className="ContactUsPage-container">
                        <div className="ContactUsPage-content">
                            <div className="container">
                                <div className="gradient-bg">
                                    <h1>Contact Now</h1>
                                    <div className="contact-info">
                                        <div className="email-info">
                                            <div className="icon">
                                                <MailIcon />
                                            </div>
                                            <h1>info@pinnaclestudios.co</h1>
                                        </div>
                                        <div className="phone-info">
                                            <div className="icon">
                                                <PhoneIcon />
                                            </div>
                                            <h1>+1 (408) 384 8602</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="white-bg"></div>
                                <div className="form-wrapper">
                                    <h1 className='contact-us-form-heading'>Let's book a free 30 minutes consultation to learn more about your project</h1>
                                    <form className="form" action='POST'>
                                        <div className="top-part">
                                            <input type="text" name="name" id="name" placeholder="Name" required onChange={(e) => {setName(e.target.value)}}/>
                                            <input type="text" name="email" id="email"  placeholder="Email" required onChange={(e) => {setEmail(e.target.value)}}/>
                                        </div>
                                        <div className="bot-part">
                                            <input type="text" name="company" id="company" placeholder="Company" required onChange={(e) => {setCompany(e.target.value)}}/>
                                            <input type="text" name='number' id='number' placeholder='Number' required onChange={(e) => {setNumber(e.target.value)}}/>
                                        </div>
                                        <textarea name="message" id='Message' placeholder='Message' required onChange={(e) => {setMsssage(e.target.value)}}></textarea> 
                                        <input type="submit" className='button' onClick={submit} value="Submit">Book Free Consultation</input> 
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
