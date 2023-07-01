import React, { useState } from 'react';
import {ReactComponent as ArrowLogo} from '../assets/arrow.svg';
import image1 from '../assets/img1.png';
import './services.css';


const Services = ({isVisible}) => {

    const [paragraph1, setParagraph1] = useState(false);
    const [paragraph2, setParagraph2] = useState(false);
    const [paragraph3, setParagraph3] = useState(false);
    const [paragraph4, setParagraph4] = useState(false);
    const [paragraph5, setParagraph5] = useState(false);

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


    return (
        <section id='services' className={`services-section ${isVisible ? 'fade-in' : ''}`}>
            <div className="services-container">
                <div className="services-content">
                    <div className="left-column">
                        <div className="figure">
                            <img src={image1} alt="showing services" />
                        </div>
                    </div>
                    <div className="right-column">
                        <h1 className='main-heading'>Use our services to inspire your customers,
                            and build a community.
                        </h1>
                        <div className="services">
                            <ul className='services-list'>
                                <li className='list-item' onClick={togglePara1}>
                                    
                                    <h1>
                                        Web Design and Development
                                    </h1>
                                    <div className={`arrow-button ${paragraph1 ? "rotate-arrow" : ""}`} >
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph1 ? 'show' : ''}`}>
                                        Our core mission is to facilitate a strong connection between our clients and their customers 
                                        through the development of research-based websites that cater to their target audience.
                                    </p>
                                </li>
                                <li className='list-item' onClick={togglePara2}>
                                    <h1>
                                        Brand Strategy Design
                                    </h1>
                                    <div className={`arrow-button ${paragraph2 ? "rotate-arrow" : ""}`} >
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph bPara ${paragraph2 ? 'show' : ''}`}>
                                        A brand strategy is a comprehensive blueprint designed to assist in achieving your company's long-term objectives. 
                                        It concentrates on the specifics of what, when, where, how, and to whom you deliver your brand's message.
                                    </p>
                                </li>
                                <li className='list-item' onClick={togglePara3}>
                                    <h1>
                                        Brand Identity System Design
                                    </h1>
                                    <div className={`arrow-button ${paragraph3 ? "rotate-arrow" : ""}`} >
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph3 ? 'show' : ''}`}>
                                        Brand identity is created when a brand's visual elements are aligned with the brand strategy. 
                                        Once a brand is done designing its brand strategy, it is time to design the brand identity system.
                                    </p>
                                </li>
                                <li className='list-item' onClick={togglePara4}>
                                    <h1>
                                        Digital Marketing
                                    </h1>
                                    <div className={`arrow-button ${paragraph4 ? "rotate-arrow" : ""}`} >
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph dmPara ${paragraph4 ? 'show' : ''}`}>
                                        Our digital marketing services include brand strategy and identity development, 
                                        which is crucial for creating a strong and recognizable brand presence in the digital world.
                                    </p>
                                </li>
                                <li className='list-item' onClick={togglePara5}>
                                    <h1>
                                        Brand Collateral Design
                                    </h1>
                                    <div className={`arrow-button ${paragraph5 ? "rotate-arrow" : ""}`} >
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph5 ? 'show' : ''}`}>
                                        We take a comprehensive approach to brand collateral design by utilizing the brand strategy and identity that we design for each business. Which include business cards, brochures, flyers, etc.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
