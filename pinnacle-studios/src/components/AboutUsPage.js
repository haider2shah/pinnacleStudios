import './AboutUsPage.css';

import React from 'react';

import Navbar from './Navbar.js';

import Footer from './Footer.js';

import {ReactComponent as Ux} from '../assets/uxDesign.svg';

import {ReactComponent as Sf} from '../assets/strategyFocused.svg';

import {ReactComponent as Bp} from '../assets/brainPower.svg';

import {ReactComponent as Otd} from '../assets/onTimeDelivery.svg';

import Us from '../assets/unitedStates.png';

const AboutUsPage = () => {
  return (
    <div className="App">
        <div className="App-header">
            <Navbar className="aboutUsPage-Navbar"/>
            <section className='aboutUsPage-section'>
                <div className='aboutUsPage-container'>
                    <div className='aboutUsPage-content1'>
                        <div className="left-column">
                            <div className="heading">
                                <h1>About us</h1>
                            </div>
                            <div className="content">
                                <p id='one'>We are a team of highly professional designers and strategists on a 
                                mission to help our clients unlock the potential of their business 
                                by relying on a research-based design process.</p>

                                <p id='two'>We believe in growing together; our clients' growth is our
                                growth and we take that seriously. </p>

                                <p>pINNACLe sTUDIOs is a virtual design studio 
                                with a team located all over the United States, 
                                committed to serving our clients.</p>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="figure">
                                <img src={Us} alt="united states pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            <section className="aboutUsPage-section">
                <div className="aboutUsPage-container2">
                    <div className="aboutUsPage-content2">
                        <div className="top-side">
                            <h1>Why Pinnacle Studios?</h1>
                            <p>We are fascinated with the power of understanding the human psychology 
                                and consumer behavior, and we use it in our design process. 
                                We don't design copycat websites, we design brands. </p>
                        </div>
                        <div className="bot-side">
                            <div className="sections">
                                <div className="icons">
                                    <Ux className='UX'/>
                                </div>
                                <h1>UX Design</h1>
                                <p>Our website design process is meticulously crafted 
                                    with a comprehensive user experience (UX) design approach. </p>
                            </div>
                            <div className="sections">
                                <div className="icons">
                                    <Sf />
                                </div>
                                <h1>Strategy Focused</h1>
                                <p>Success is the result of strategic thinking. 
                                    We help our clients to design strategies that 
                                    helps them achieve measurable growth.</p>
                            </div>
                            <div className="sections">
                                <div className="icons">
                                    <Bp />
                                </div>
                                <h1>Brain Power</h1>
                                <p>We understand the power of human psychology, and we use 
                                    it in our strategies to help create designs that solves 
                                    a deeper problem.</p>
                            </div>
                            <div className="sections">
                                <div className="icons">
                                    <Otd />
                                </div>
                                <h1>On time delivery</h1>
                                <p>We respect our client's time and don't believe in wasting it. 
                                    On time delivery is our top priority in every project we manage. </p>
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

export default AboutUsPage;