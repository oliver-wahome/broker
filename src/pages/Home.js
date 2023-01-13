import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pageStyles/Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="homeContent">
        <div className="homeCell cellOne">
          <h1 className="cellOneRow Title">
            The Easiest <br />
            Way to Manage <br />
            Your Finances <br />
          </h1>
          <p className="cellOneRow Description">
            We are bringing banking application to a new level of
            technology never seen before
          </p>

          <form className="cellOneRow">
            <input type="email" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter password" />
            <button>subscribe</button>
          </form>
        </div>
        <div className="homeCell cellTwo"></div>
        <div className="homeCell cellThree"></div>

        <div className="cellFour">
          <div className="cellFourColumn">
            <h3>4X</h3>
            <p>
              Rapid increase
              of your wealth
            </p>
          </div>
          <div className="cellFourColumn">
            <h3>-30%</h3>
            <p>
              Decrease your 
              expenses wisely
            </p>
          </div>
          <div className="cellFourColumn">
            <h3>1M+</h3>
            <p>
              Trusted regular 
              active users
            </p>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home;