import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../firebase';
import { getAuth, signOut } from "firebase/auth";
import DashboardMenu from '../components/DashboardMenu';
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

            <DashboardMenu />

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