import React from 'react';
import { useRef } from 'react';
import brokerLogo from '../images/brokerIcon-amethyst.png';
import googleIcon from '../images/googleIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../App.css';
import '../pageStyles/AuthPage.css';
import '../pageStyles/SignIn.css';

function SignIn (){

    let signinEmailInput = useRef();
    let signinPasswordInput = useRef();
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents page from reload on submit
        let email = signinEmailInput.current.value;
        let password = signinPasswordInput.current.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(email + " "+ password + " " + user.uid);
            navigate("/dashboard");//redirecting to the dashboard
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode + " "+errorMessage);
        });

      }


    return(
        <div className="authPageContainer signinContainer">
            <div className="authPage signinPage">
                <Link to="/" className="logoSection">
                    <img src={brokerLogo} alt="logo-icon" height="30px" width="30px" />
                    <p>Broker</p>
                </Link>

                <div className="authContent">
                    <h2 className="authTitle">
                        Sign in
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="authForm signinForm">
                    <input ref={signinEmailInput} type="email" placeholder="Email" autoFocus required/>
                    <input ref={signinPasswordInput} type="password" placeholder="Password" required/>
                    <div className="authPasswordLabelSection">
                        <p className="authPassLink">Forgot it?</p>
                    </div>
                    <button className="authFormBtn">Sign in</button>
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
                    <p>Sign in with Google</p>
                </div>

                <p className="authFooterText">
                    By registering, you are indicating that you have read and agree
                    to the <span>Terms of Use</span> and <span>Privacy Policy</span>.
                </p>

                <p className="authFooterText">
                    Don't have a Broker account yet? <span><Link className="authFooterLink" to="/register">Register now.</Link></span>
                </p>
            </div>
        </div>
    );
}

export default SignIn;