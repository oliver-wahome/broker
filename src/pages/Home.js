import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pageStyles/Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="homeContent">
        <div className="homeCell cellOne">1</div>
        <div className="homeCell cellTwo">2</div>
        <div className="homeCell">3</div>
        <div className="homeCell">4</div>
      </div>

      <Footer />

    </div>
  )
}

export default Home;