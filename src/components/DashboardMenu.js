import React from 'react';
import logo from '../images/brokerIcon-amethyst.png';
import { Link } from 'react-router-dom';

function DashboardMenu(){
    return(
        <div className="dashboardMenu">
            <Link to="/" className="logoSection">
                <img src={logo} alt="logo-icon" height="30px" width="30px" />
                <p>Broker</p>
            </Link>
            <Link to="/income">Income</Link>
            <Link to="/">Expenses</Link>
            <Link to="/">Overview</Link>
        </div>
    );
}

export default DashboardMenu;