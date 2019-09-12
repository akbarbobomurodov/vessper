import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
//    import css files
import './css/navbar.css';
import './css/navbarmedia.css';
//    import components
import Home from '../components/sections/home'
import {increment, decrement} from '../actions/action'


class NavbarSelf extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
           counter:0
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  handleSetActive=()=>{
      return(
          <Home counter={this.state.counter}/>
      )
  }   

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const win = document.querySelector('.selfnavbar');
        const s = window.pageYOffset
        if (s) {
            this.refs.parentnavbar.style.background = '#333333'
            win.style.background = "#333333"
        } else {
            this.refs.parentnavbar.style.background = 'black';
            win.style.background = "black";
        }
    }  
        render(){
         console.log(this.props.post)
            return (
                <div className="parentnavbar" name="parentnavbar" id="navbar" ref="parentnavbar">
                    <Navbar expand="md" className="selfnavbar">
                        <NavbarBrand href="/" className="self-brand"><span>V</span>esperr</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto selfnav" navbar>
                                <NavItem>
                                        <Link
                                        className="nav-link"
                                            activeClass="active"
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onSetActive={this.props.increment}
                                            onSetInactive={this.props.decrement}>Home</Link>
                                </NavItem>
                                <NavItem>
                                        <Link
                                        className="nav-link"
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}>About</Link>
                                </NavItem>
                                <NavItem>
                                        <Link
                                        className="nav-link"
                                            activeClass="active"
                                            to="services"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={1100}>Services</Link>
                                </NavItem>
                                <NavItem>
                                        <Link
                                        className="nav-link"
                                            activeClass="active"
                                            to="works"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={1400}>Works</Link>
                                </NavItem>
                                <NavItem>
                                        <Link
                                        className="nav-link"
                                            activeClass="active"
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={1700}>Contact</Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                        
                                         <Link 
                                        className="nav-link nav caret"
                                            activeClass="active"
                                            to="features"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={2000}>Features
                                            
                                    <Link
                                        className="nav-link  dropdown-toggle"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        activeClass="active"
                                        to="features"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={2000}></Link>
                                            </Link> 
                                            
                                   
                                    <DropdownMenu right>
                                        <DropdownItem> 
                                            Option 1
                                     </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                     </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                     </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            )
        }
    
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = () => {
    return {
        increment,
        decrement
    }
}


export default connect(mapStateToProps, mapDispatchToProps())(NavbarSelf);
