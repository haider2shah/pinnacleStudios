import './ServicesPage.css';

import React, { useState } from 'react';
import {ReactComponent as ArrowLogo} from '../assets/gradientArrow.svg';
import image1 from '../assets/img1.png';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const ServicesPage = () => {
    const [paragraph1, setParagraph1] = useState(false);
    const [paragraph2, setParagraph2] = useState(false);
    const [paragraph3, setParagraph3] = useState(false);
    const [paragraph4, setParagraph4] = useState(false);
    const [paragraph5, setParagraph5] = useState(false);
    const [paragraph6, setParagraph6] = useState(false);

    const togglePara1 = () => {
        setParagraph1(!paragraph1);
    };

    const togglePara2 = () => {
        setParagraph2(!paragraph2);
    };
    const togglePara3 = () => {
        setParagraph3(!paragraph3);
    };
    const togglePara4 = () => {
        setParagraph4(!paragraph4);
    };
    const togglePara5 = () => {
        setParagraph5(!paragraph5);
    };
    const togglePara6 = () => {
        setParagraph6(!paragraph6);
    };


    return (
        <div className="App">
            <div className="App-header">
                <Navbar className="servicesPage-Navbar"/>
                <section className='servicesPage-section'>
                    <div className='servicesPage-container'>
                        <div className='servicesPage-content1'>
                            <div className="left-column">
                                <div className="heading">
                                    <h1>Explore our services</h1>
                                </div>
                                <div className="content">
                                    <p id='services-one'>Here you can explore some of 
                                    the amazing projects that our web design studio 
                                    has completed for our clients. We take pride in 
                                    our ability to deliver exceptional websites that 
                                    are tailored to the unique needs and goals of each 
                                    of our clients.
                                    </p>

                                    <p >This section shows a selected range of our 
                                        projects and does not display every project
                                        we have completed. </p>

                                </div>
                            </div>
                            <div className="right-column">
                                <div className="figure">
                                    <img src={image1} alt="services pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="servicesPage-section2">
                    <div className="servicesPage-container2">
                        <div className="servicesPage-content2">
                            <div className="services">
                                <ul className='services-list'>
                                    <li className='list-item'>
                                        
                                        <h1>
                                            WEBSITE DESIGN
                                        </h1>
                                        <div style={{ pointerEvents: 'all' }} className={`arrow-button ${paragraph1 ? "rotate-arrow" : ""}`} onClick={togglePara1}>
                                            <ArrowLogo />
                                        </div>
                                        <p className={`fade-in-paragraph ${paragraph1 ? 'show' : ''}`}>
                                            Our core mission is to facilitate a strong connection between our clients and their 
                                            customers through the development of research-based websites that cater to their 
                                            target audience. Our approach centers on comprehending customer psychology and 
                                            leveraging creativity to deliver exceptional digital user experiences. We employ 
                                            UX design principles to gain a deep understanding of our clients' distinct business 
                                            requirements, enabling us to design data-driven websites that are truly bespoke.
                                        </p>
                                    </li>
                                    <li className='list-item'>
                                        <h1>
                                            BRAND STRATEGY
                                        </h1>
                                        <div style={{ pointerEvents: 'all' }} className={`arrow-button ${paragraph2 ? "rotate-arrow" : ""}`} onClick={togglePara2}>
                                            <ArrowLogo />
                                        </div>
                                        <p className={`fade-in-paragraph ${paragraph2 ? 'show' : ''}`}>
                                            A brand strategy is a comprehensive blueprint designed to assist in 
                                            achieving your company's long-term objectives. It concentrates on the 
                                            specifics of what, when, where, how, and to whom you deliver your brand's message. 
                                            clear brand strategy is the primary force that drives a business towards sustainable growth.
                                        </p>

                                        <p className={`fade-in-paragraph ${paragraph2 ? 'show' : ''}`}>
                                            It's crucial to recognize that brand strategy, branding, and brand identity 
                                            are distinct concepts. We help our clients to clearly identify the difference 
                                            and design a clear brand strategy that serves as the guiding tool for every 
                                            business decision.
                                        </p>
                                    </li>
                                    <li className='list-item'>
                                        <h1>
                                            BRAND IDENTITY
                                        </h1>
                                        <div style={{ pointerEvents: 'all' }} className={`arrow-button ${paragraph3 ? "rotate-arrow" : ""}`} onClick={togglePara3}>
                                            <ArrowLogo />
                                        </div>
                                        <p className={`fade-in-paragraph ${paragraph3 ? 'show' : ''}`}>
                                            Brand identity is created when a brand's visual 
                                            elements are aligned with the brand strategy. 
                                            Once a brand is done designing its brand strategy, 
                                            it is time to design the brand identity system. A brand's logo, 
                                            choice of colors, typeface, tagline, marketing collateral, illustrations, 
                                            advertisements, and all other visual elements are considered a 
                                            part of brand identity system. We help our clients in designing 
                                            the brand identity system that maintains consistency, brand culture, 
                                            personality, and tone of voice in all visual design choices.
                                        </p>
                                    </li>
                                    <li className='list-item'>
                                        <h1>
                                            GRAPHIC DESIGN
                                        </h1>
                                        <div style={{ pointerEvents: 'all' }} className={`arrow-button ${paragraph4 ? "rotate-arrow" : ""}`} onClick={togglePara4}>
                                            <ArrowLogo />
                                        </div>
                                        <p className={`fade-in-paragraph ${paragraph4 ? 'show' : ''}`}>
                                            We offers comprehensive graphic design services that are tailored to 
                                            enhance your website's visual appeal and overall user experience. 
                                            Our skilled team of designers specializes in logo design, illustrations, 
                                            and other vital graphic elements that are essential to creating a 
                                            captivating website that truly resonates with your audience. Our expert 
                                            designers work closely with you to understand your business goals and objectives, 
                                            enabling us to design visually stunning and cohesive graphic elements 
                                            that reflect your brand's identity.
                                        </p>
                                    </li>
                                    <li className='list-item'>
                                        <h1>
                                            BRANDING COLLATERAL
                                        </h1>
                                        <div style={{ pointerEvents: 'all' }} className={`arrow-button ${paragraph5 ? "rotate-arrow" : ""}`} onClick={togglePara5}>
                                            <ArrowLogo />
                                        </div>
                                        <div className={`fade-in-paragraph special-paragraph ${paragraph5 ? 'show' : ''}`}>
                                            <p >
                                                We take a comprehensive approach to branding collateral design by utilizing the brand 
                                                strategy and identity that we design for each business. This ensures that the 
                                                messaging and design of your branding collateral are consistent with your overall 
                                                brand identity and resonate with your target audience. We design all kinds of branding 
                                                collateral including but not limited to;
                                            </p>
                                            <ul className="paragraph-list">
                                                <li>Business cards</li>
                                                <li>Brochures</li>
                                                <li>Flyers</li>
                                                <li>Posters</li>
                                                <li>Social media graphics</li>
                                                <li>Email templates</li>
                                            </ul>
                                            <p>and more</p>
                                        </div>

                                    </li>
                                    <li className='list-item'>
                                        <h1>
                                            DIGITAL MARKETING
                                        </h1>
                                        <div style={{ pointerEvents: 'all' }} className={`arrow-button ${paragraph6 ? "rotate-arrow" : ""}`} onClick={togglePara6}>
                                            <ArrowLogo />
                                        </div>
                                        <p className={`fade-in-paragraph ${paragraph6 ? 'show' : ''}`}>
                                            Our digital marketing services include brand strategy and identity development, 
                                            which is crucial for creating a strong and recognizable brand presence in the 
                                            digital world. We work closely with our clients to understand their brand vision 
                                            and values, and use this knowledge to develop a brand identity that resonates 
                                            with their target audience. We offer a range of other digital marketing services, 
                                            including search engine optimization (SEO), social media marketing, email marketing,
                                             content marketing, and more.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default ServicesPage;
