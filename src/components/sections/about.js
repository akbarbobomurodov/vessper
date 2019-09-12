import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './css/about.css'
import './css/media/aboutmedia.css';
import './css/media/tablet/about.css';
import './css/media/laptop/about.css';

import User1 from '../img/dummies/team1.jpg'
import User2 from '../img/dummies/team2.jpg'
import User3 from '../img/dummies/team3.jpg'
import User4 from '../img/dummies/team4.jpg'
import Facebook from '../img/facebook.png';
import Twitter from '../img/twitter.png';
import Instagram from '../img/instagram.png';
const About = () => {
    return (
        <div className="about container-fluid" id="about">
            <h1>about us</h1>
            <span></span>
            <p>We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.</p>
            <div className="row">
                <div className="selfcard col-12 col-xl-3 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src={User1} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Baby Stewards Jr</CardTitle>
                            <CardSubtitle>CEO - Founder</CardSubtitle>
                          
                            <div>
                                <img src={Facebook} alt=""/>
                                <img src={Twitter} alt="" />
                                <img src={Instagram} alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="selfcard col-12 col-xl-3 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src={User2} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Tommy Kreunichev</CardTitle>
                            <CardSubtitle>Lead designer</CardSubtitle>

                            <div>
                                <img src={Facebook} alt="" />
                                <img src={Twitter} alt="" />
                                <img src={Instagram} alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="selfcard col-12 col-xl-3 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src={User3} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>
                                Moriella Maccini</CardTitle>
                            <CardSubtitle>Customer support</CardSubtitle>
                            <div>
                                <img src={Facebook} alt="" />
                                <img src={Twitter} alt="" />
                                <img src={Instagram} alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="selfcard col-12 col-xl-3 col-md-6 col-lg-3" >
                    <Card>
                        <CardImg top width="100%" src={User4} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Brian James Scoothie</CardTitle>
                            <CardSubtitle>Coffee maker</CardSubtitle>

                            <div>
                                <img src={Facebook} alt="" />
                                <img src={Twitter} alt="" />
                                <img src={Instagram} alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default About;