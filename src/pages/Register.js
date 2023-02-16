import React from 'react';
import { useRef } from 'react';
import brokerLogo from '../images/brokerIcon-amethyst.png';
import googleIcon from '../images/googleIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import '../App.css';
import '../pageStyles/AuthPage.css';


function Register(){

    let regEmailInput = useRef();
    let regPasswordInput = useRef();
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents page from reload on submit
        let email = regEmailInput.current.value;
        let password = regPasswordInput.current.value;

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const userId = user.uid;

            // Add a new document in collection "users"
            setDoc(doc(db, "users", userId), {
                email: email,
                userId: userId
            }).then(() => {
                console.log(email + " "+ password + " " + userId);
                navigate("/onboarding");//redirecting to the dashboard
            }).catch((error) => {
                console.log(error.message);
            });
  
        })
        .catch((error) => {
            console.log(error.code + " " + error.message);
        });

        // setting the both input values to nothing after submitting
        // regEmailInput.current.value = "";
        // regPasswordInput.current.value = "";
      }

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

                <form onSubmit={handleSubmit} className="authForm">
                    <input ref={regEmailInput} type="email" placeholder="Email" autoFocus required/>
                    <input ref={regPasswordInput} type="password" placeholder="Password" required/>
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