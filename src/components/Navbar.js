import React from 'react';
import logo from '../images/brokerIcon-amethyst.png';
import { Link } from 'react-router-dom';
import '../componentStyles/Navbar.css';
import '../App.css';

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
                <Link to="/signin" className="button signinBtn">Sign in</Link>
                <Link to="/register" className="button regBtn">Register</Link>
            </div>
        </div>
    );
}

export default Navbar;