import React from 'react';
import { Link } from 'react-scroll';


import './css/services.css'
import './css/media/sermedia.css';
import './css/media/tablet/services.css';
import './css/media/laptop/services.css';

import Servic1 from '../img/service/laptop.png';
import Servic2 from '../img/service/briefcase.png';
import Servic3 from '../img/service/smartphone.png';
import Servic4 from '../img/service/beaker.png'
const Services = () => {
    return (
        <div className="services" id="services">
            <h1>OUR SERVICES</h1>
            <span></span>
            <p>We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.</p>
            <div className="row">
                <div className="col-12 col-xl-3 col-md-6">
                    <h4>User interface</h4>
                    <img src={Servic1} alt="" />
                    <p>Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam</p>
                    <Link
                        className="btn btn-primary"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true} 
                        offset={-70}
                        duration={500}
                        >Learn More</Link>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <h4>Content management</h4>
                    <img src={Servic2} alt="" />
                    <p>Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam</p>
                    <Link
                        className="btn btn-primary"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Learn More</Link>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <h4>Mobile application</h4>
                    <img src={Servic3} alt="" />
                    <p>Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam</p>
                    <Link
                        className="btn btn-primary"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Learn More</Link>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                        <h4>Web design</h4>
                    <img src={Servic4} alt="" />
                    <p>Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam</p>
                    <Link
                        className="btn btn-primary"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Learn More</Link>
                </div>
            </div>

        </div>
    )
}

export default Services;