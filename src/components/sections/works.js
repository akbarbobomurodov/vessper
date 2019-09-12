import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-scroll';
import { Button, Modal, ModalBody } from 'reactstrap';

//   import css files
import './css/works.css'
import './css/topslide.css'
import './css/modal.css'
import './css/media/workmedia.css';
import './css/media/tablet/work.css';
import './css/media/laptop/work.css';

//   import image file
import Port1 from '../img/portfolio/img1.jpg'
import Port2 from '../img/portfolio/img2.jpg'
import Port3 from '../img/portfolio/img3.jpg'
import Port4 from '../img/portfolio/img4.jpg'
import Port5 from '../img/portfolio/img5.jpg'
import Port6 from '../img/portfolio/img6.jpg'
import Port7 from '../img/portfolio/img7.jpg'
import Port8 from '../img/portfolio/img8.jpg'

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            class: 'all',
            counter: 0,
            modal: false,
            port: [
                Port1, Port2, Port3, Port4, Port5, Port6, Port7, Port8,
            ]
        }
        this.modaltoggle = this.modaltoggle.bind(this);
    }



    modaltoggle(e) {
        this.setState({
            counter: e.target.id
        })
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    change = (e) => {
        if (e.target.name === "all") {
            this.setState({
                toggle: !this.state.toggle,
                class: e.target.name
            })

            setTimeout(() => {
                this.setState({
                    toggle: !this.state.toggle
                })
            }, 2500);
        }
        if (e.target.name === 'web' || e.target.name === 'brand' || e.target.name === 'graphic') {
            this.setState({
                class: e.target.name
            })
        }
    }


    render() {
        return (
            <div className="works container-fluid" id="works">
                <h1>RECENT WORKS</h1>
                <span></span>
                <p>We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.</p>
                <div className="btngroup row">
                    <Button name="all" onClick={e => this.change(e)}>All categories</Button>
                    <Button name="web" onClick={e => this.change(e)} >Web design</Button>
                    <Button name="brand" onClick={e => this.change(e)}>Brand identity</Button>
                    <Button name="graphic" onClick={e => this.change(e)}>Graphic design</Button>
                </div>
                <div className='con row'>
                    <div className={classnames(
                        {
                            [this.state.class + '1']: !this.state.toggle,
                            ['all' + '11']: this.state.toggle,
                            ["col"+"-12"]:true,
                            ['col-xl-3']:true,
                            ['col-md-4']:true,
                            ['col-lg-3']:true
                        }
                    )}>
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port1} id="1" alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="1" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classnames(
                        {
                            [this.state.class + '2']: !this.state.toggle,
                            ['all' + '22']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        })}>
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port2} alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="2" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div  className={classnames(
                        {
                            [this.state.class + '3']: !this.state.toggle,
                            ['all' + '33']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        })}
                    >
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port3} alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="3" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-6" className={classnames(
                        {
                            [this.state.class + '4']: !this.state.toggle,
                            ['all' + '44']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        })}>
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port4} alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="4" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-6" className={classnames(
                        {
                            [this.state.class + '5']: !this.state.toggle,
                            ['all' + '55']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        }
                    )}>
                        <div
                            className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port5} alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="5" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-6" className={classnames(
                        {
                            [this.state.class + '6']: !this.state.toggle,
                            ['all' + '66']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        })}>
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port6} alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="6" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classnames(
                        {
                            [this.state.class + '7']: !this.state.toggle,
                            ['all' + '77']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        }
                    )}>
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port7} alt="" />
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="7" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(
                        {
                            [this.state.class + '8']: !this.state.toggle,
                            ['all' + '88']: this.state.toggle,
                            ["col" + "-12"]: true,
                            ['col-xl-3']: true,
                            ['col-md-4']: true,
                            ['col-lg-3']: true
                        })}>
                        <div className={classnames({ activee: this.state.toggle, usual: true })}>
                            <img src={Port8} alt="" />
                            <Modal isOpen={this.state.modal} toggle={this.modaltoggle} className={this.props.className}>
                                <ModalBody>
                                    <img src={this.state.port[this.state.counter - 1]} alt="" id="8" />
                                </ModalBody>
                            </Modal>
                            <div className="overlay">
                                <div className="text">
                                    <Link
                                        className="material-icons md-36"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >repeat</Link>
                                    <i className="material-icons md-36" id="8" onClick={e => this.modaltoggle(e)}>zoom_in</i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Works;

