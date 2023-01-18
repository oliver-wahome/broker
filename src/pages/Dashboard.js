import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../firebase';
import { getAuth, signOut } from "firebase/auth";



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

            Dashboard

            <button onClick={logOut}>logout</button>

            <Link to="/profile">go to profile</Link>

            <Footer />
        </div>
    );
}

export default Dashboard;