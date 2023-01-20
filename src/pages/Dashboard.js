import React from 'react';
import logo from '../images/brokerIcon-amethyst.png';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../firebase';
import { getAuth, signOut } from "firebase/auth";
import '../pageStyles/Dashboard.css';

function Dashboard() {

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

    return (
        <div className="dashboardPage">
            <div className="dashboardMenu">
                <Link to="/" className="logoSection">
                    <img src={logo} alt="logo-icon" height="30px" width="30px" />
                    <p>Broker</p>
                </Link>
                <Link to="/income">Income</Link>
                <Link to="/">Expenses</Link>
                <Link to="/">Overview</Link>
            </div>
            <div className="dashboardBody">
                <div className="dashboardBodyNavbar">
                    <button onClick={logOut}>logout</button>
                    <Link to="/profile">go to profile</Link>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;