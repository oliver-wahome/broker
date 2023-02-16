import React from 'react';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import '../pageStyles/Home.css';
//import Footer from '../components/Footer';


function Home() {
    return (
        <div className="home pageContainer">
            <Navbar />

            <HomeSection />

            {/* <Footer /> */}
        </div>
    )
}

export default Home;