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
        <section className={`services-section ${isVisible ? 'fade-in' : ''}`}>
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
                                <li className='list-item'>
                                    
                                    <h1>
                                        Web Design and Development
                                    </h1>
                                    <div className={`arrow-button ${paragraph1 ? "rotate-arrow" : ""}`} onClick={togglePara1}>
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph1 ? 'show' : ''}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorum.
                                    </p>
                                </li>
                                <li className='list-item'>
                                    <h1>
                                        Brand Strategy Design
                                    </h1>
                                    <div className={`arrow-button ${paragraph2 ? "rotate-arrow" : ""}`} onClick={togglePara2}>
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph2 ? 'show' : ''}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorum.
                                    </p>
                                </li>
                                <li className='list-item'>
                                    <h1>
                                        Brand Identity System Design
                                    </h1>
                                    <div className={`arrow-button ${paragraph3 ? "rotate-arrow" : ""}`} onClick={togglePara3}>
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph3 ? 'show' : ''}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorum.
                                    </p>
                                </li>
                                <li className='list-item'>
                                    <h1>
                                        Digital Marketing
                                    </h1>
                                    <div className={`arrow-button ${paragraph4 ? "rotate-arrow" : ""}`} onClick={togglePara4}>
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph4 ? 'show' : ''}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorum.
                                    </p>
                                </li>
                                <li className='list-item'>
                                    <h1>
                                        Branding Collateral Design
                                    </h1>
                                    <div className={`arrow-button ${paragraph5 ? "rotate-arrow" : ""}`} onClick={togglePara5}>
                                        <ArrowLogo />
                                    </div>
                                    <p className={`fade-in-paragraph ${paragraph5 ? 'show' : ''}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorum.
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
