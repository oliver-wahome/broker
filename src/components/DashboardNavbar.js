import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../firebase';
import { getAuth, signOut } from "firebase/auth";
import logo from '../images/brokerIcon-amethyst.png';
import '../pageStyles/Dashboard.css';

function DashboardNavbar(){

    let navigate = useNavigate();

    const auth = getAuth();
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("logged out");
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        });
    }

    return(
        <div className="dashboardNavbar">
            <Link to="/" className="logoSection">
                <img src={logo} alt="logo-icon" height="30px" width="30px" />
                <p>Broker</p>
            </Link>
            <div className="dashboardNavbarProfile">
                <button onClick={logOut}>logout</button>
                <Link to="/profile">go to profile</Link>
            </div>
        </div>
    );
}

export default DashboardNavbar;