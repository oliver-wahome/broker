import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import '../pageStyles/Home.css';

function HomeSection() {

    let emailInput = useRef();
    let passwordInput = useRef();
    let navigate = useNavigate();

    //this function gets the email and password input of the subcription form
    //for now the email and password is logged and alerted
    const handleSubmit = (event) => {
        event.preventDefault(); //prevents page from reload on submit
        //getting the current email and password input values
        let email = emailInput.current.value;
        let password = passwordInput.current.value;

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                const userId = user.uid;

                //Add a new document in the users collection
                setDoc(doc(db, "users", userId), {
                    email: email,
                    userId: userId
                }).then(() => {
                    console.log(`${email} ${password} ${userId}`);
                    navigate("/onboarding"); //redirect to the onboarding page
                }).catch((error) => {
                    console.log(error.message);
                });
            })
            .catch((error) => {
                console.log(error.code + " " + error.message);
            });
        
        //setting the both input values to nothing after submitting
        // emailInput.current.value = "";
        // passwordInput.current.value = "";
    }

    return (
        <div>
            <div className="homeContent">
                <div className="homeCell cellOne">
                    <h1 className="cellOneRow Title">
                        The Easiest <br />
                        Way to Manage <br />
                        Your Finances <br />
                    </h1>
                    <p className="cellOneRow Description">
                        Providing easy access to world class financial management services
                        for small businesses & the self-employed
                    </p>

                    <form onSubmit={handleSubmit} className="homeForm cellOneRow">
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
        </div>
    );
}

export default HomeSection;