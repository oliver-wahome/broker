import React from 'react';
import logo from '../images/brokerIcon-amethyst.png';
import { Link } from 'react-router-dom';
import '../App.css';
import '../pageStyles/Register.css';


function Register(){
    return(
        <div className="registerContainer">
            <div className="register">
                <Link to="/" className="logoSection">
                    <img src={logo} alt="logo-icon" height="30px" width="30px" />
                    <p>Broker</p>
                </Link>

                <div className="registerContent">
                    <h2 className="registerTitle">
                        Check out Broker, it's free!
                    </h2>
                    <p className="registerText">
                        Broker helps freelances, consultants, and small businesses
                        around the world simplify their finances.
                    </p>
                </div>

                <form>
                    <input id="registerEmailInput" type="text" placeholder="Email" />
                    <input id="registerPasswordInput" type="text" placeholder="Password" />
                    <div className="registerPasswordLabelSection">
                        <label htmlFor="registerPasswordInput">At least 8 characters, but longer is better</label>
                        <p className="registerPasswordHide">Hide</p>
                    </div>
                </form>

                <div className="getStartedBtn">
                    Get started
                </div>

                <div className="orDivider">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>

                <div className="getStartedBtn">
                    <img src="" alt="google-icon" />
                    <p>Sign up with Google</p>
                </div>

                <p className="termsOfService">
                    By registering, you are indicating that you have read and agree
                    to the <span>Terms of Use</span> and <span>Privacy Policy</span>.
                </p>

                <p className="registerLink">
                    Already have an account? <span>Sign in now.</span>
                </p>
            </div>
        </div>
    );
}

export default Register;