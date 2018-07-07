import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        const defaultStyle = {color: '#263a60'}
        const active = {color: '#89c8e5'};

        return (
            <ul className="bar">
                <NavLink className="home" exact style={defaultStyle} activeStyle={active} to='/'>
                    <li >Home</li>
                </NavLink>

                <NavLink className="about" exact style={defaultStyle} activeStyle={active} to='/about'>
                    <li >About</li>
                </NavLink>

                <NavLink className="portfolio" exact style={defaultStyle} activeStyle={active} to='/portfolio'>
                    <li className="portfolio">Portfolio</li>
                </NavLink>

                <NavLink className="contact" exact style={defaultStyle} activeStyle={active} to='/contact'>
                    <li className="contact">Contact</li>
                </NavLink>
            </ul>
        )
    }
}

export default Navbar;