import React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import '../pageStyles/Home.css';
//import Footer from '../components/Footer';


function Home() {
  let emailInput = useRef();
  let passwordInput = useRef();

  //this function gets the email and password input of the subcription form
  //for now the email and password is logged and alerted
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents page from reload on submit
    //getting the current email and password input values
    let email = emailInput.current.value;
    let password = passwordInput.current.value;

    console.log(`${email} ${password}`);

    alert(`${email} ${password}`);
    
    //setting the both input values to nothing after submitting
    emailInput.current.value = "";
    passwordInput.current.value = "";
  }

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

          <form onSubmit={handleSubmit} className="cellOneRow">
            <input className="subInput" id="emailInput" type="email" ref={emailInput} placeholder="Enter your email"/>
            <input className="subInput" id="passwordInput" type="password" ref={passwordInput} placeholder="Enter password" />
            <button className="subBtn">subscribe</button>
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

      {/* <Footer /> */}

    </div>
  )
}

export default Home;