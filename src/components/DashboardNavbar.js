import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../firebase';
import { getAuth, signOut } from "firebase/auth";
import logo from '../images/brokerLogo.png';
import '../pageStyles/Dashboard.css';
import '../componentStyles/Navbar.css';

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
                <button className="button logoutBtn" onClick={logOut}>logout</button>
                <Link className="button profileBtn" to="/profile">go to profile</Link>
            </div>
        </div>
    );
}

export default DashboardNavbar;