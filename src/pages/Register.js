import React from 'react';
import brokerLogo from '../images/brokerIcon-amethyst.png';
import googleIcon from '../images/googleIcon.png';
import { Link } from 'react-router-dom';
import '../App.css';
import '../pageStyles/AuthPage.css';


function Register(){

    return(
        <div className="authPageContainer">
            <div className="authPage">
                <Link to="/" className="logoSection">
                    <img src={brokerLogo} alt="logo-icon" height="30px" width="30px" />
                    <p>Broker</p>
                </Link>

                <div className="authContent">
                    <h2 className="authTitle">
                        Check out Broker — it's free!
                    </h2>
                    <p className="authText">
                        Broker helps freelancers, consultants, and small businesses
                        around the world simplify their finances.
                    </p>
                </div>

                <form className="authForm">
                    <input type="email" placeholder="Email" autoFocus required/>
                    <input type="password" placeholder="Password" required/>
                    <div className="authPasswordLabelSection">
                        <p>At least 8 characters, but longer is better</p>
                        <p className="authPassLink">Show</p>
                    </div>
                    <button className="authFormBtn">Get started</button>
                </form>

                <div className="orDivider">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>

                <div className="googleBtn">
                    <div className="googleImgContainer">
                        <img src={googleIcon} alt="google-icon" height="20px" width="20px" />
                    </div>
                    <p>Register with Google</p>
                </div>

                <p className="authFooterText">
                    By registering, you are indicating that you have read and agree
                    to the <span>Terms of Use</span> and <span>Privacy Policy</span>.
                </p>

                <p className="authFooterText">
                    Already have an account? <span><Link className="authFooterLink" to="/signin">Sign in now.</Link></span>
                </p>
            </div>
        </div>
    );
}

export default Register;