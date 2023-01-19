import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
        <div className="dashboard">
            <Navbar />

            <div className="dashboardContent">
                Dashboard
                <button onClick={logOut}>logout</button>
                <Link to="/profile">go to profile</Link>
            </div>

            <Footer />
        </div>
    );
}

export default Dashboard;