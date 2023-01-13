import React from 'react';
import logo from '../images/brokerIcon-amethyst.png';
import { Link } from 'react-router-dom';
import '../componentStyles/Navbar.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Navbar() {

    return (
        <div className="navbar">
            <Link to="/" className="logoSection">
                <img src={logo} alt="logo-icon" height="30px" width="30px" />
                <p>Broker</p>
            </Link>

            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/dashboard" className="link">Dashboard</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>

            <div className="buttons">
                <div className="button signinBtn">Sign in</div>
                <div className="button regBtn">Register</div>
            </div>
        </div>
    );
}

export default Navbar;