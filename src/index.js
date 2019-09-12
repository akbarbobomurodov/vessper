import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { createStore } from 'redux';
import bigReducer from './reducer/combineReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
//import css
import './components/css/navbar.css';
// import img

const store=createStore(bigReducer)

//    import components
const NavbarSelf = React.lazy(() => import('./components/navbar'))
const Home=React.lazy(()=>import('./components/sections/home'))
const About = React.lazy(() => import('./components/sections/about'))
const Services = React.lazy(() => import('./components/sections/services'))
const Works = React.lazy(() => import('./components/sections/works'))
const Contact = React.lazy(() => import('./components/sections/contact/contact'))
const Features = React.lazy(() => import('./components/sections/features'))
class App extends Component {


    render() {
        return (
            <div >
                <Suspense fallback={<div>Loading....</div>}>
                    <NavbarSelf />
                </Suspense>
                <Suspense fallback={<div>Home  Loading....</div>}>
                    <Home />
                </Suspense>
                <Suspense fallback={<div>About  Loading....</div>}>
                    <About />
                </Suspense>
                <Suspense fallback={<div>Services  Loading....</div>}>
                    <Services />
                </Suspense>
                <Suspense fallback={<div>Works  Loading....</div>}>
                    <Works />
                </Suspense>
                <Suspense fallback={<div>Contact  Loading....</div>}>
                    <Contact />
                </Suspense>
                <Suspense fallback={<div>Features  Loading....</div>}>
                    <Features />
                </Suspense>
                {/* <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <img src={House} alt="home" style={{
                      width:'30px',
                      height:'30px'
                  }} /></Link> */}
                  
            </div>
        )
    }
}


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'))



//https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw






//https://www.youtube.com/watch?v=l-s9MgoMwTI&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=30
//https://ru.savefrom.net/#url=http://youtube.com/watch?v=W3_GIiN-nuc&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=32&utm_source=youtube.com&utm_medium=short_domains&utm_campaign=www.ssyoutube.com&a_ts=1566557386.254