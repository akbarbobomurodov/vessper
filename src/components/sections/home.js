import React, { Component } from 'react';

import { connect } from 'react-redux';

import LogoChmestry from '../img/test-tube.png'
// import css files
import './css/home.css'
import './css/media/homemedia.css';
import './css/media/tablet/home.css';
import './css/media/laptop/home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: [0],
            classname: 'onhome'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const windowHeight = window.pageYOffset;
        const bigel = document.querySelector('.onhome')
        const el = document.querySelector('img')
        if (windowHeight < 300) {
            bigel.style.opacity = '1'
            el.style.opacity='1'
        } else if (windowHeight > 0) {
            bigel.style.opacity = '0'
            el.style.opacity='0'
        }
    }

    render() {
        return (
            <div>

            <div className="home" id="home">
                <div className='onhome' ref="onhome">
                    <img src={LogoChmestry} all="" />
                    <h1>Welcome to<span> Vesperr</span> creative studio</h1>
                    <p>Crafting ideas with technology and imagination</p>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps)(Home);