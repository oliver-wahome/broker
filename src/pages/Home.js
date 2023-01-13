import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
        <Navbar />
        
        <div className="homeContent">
            Home
        </div>

        <Footer />

    </div>
  )
}

export default Home;