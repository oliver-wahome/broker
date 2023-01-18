import React from 'react';
import { useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

function OnBoarding(){
    let firstName = useRef();
    let lastName = useRef();
    let businessName = useRef();
    let navigate = useNavigate();
    

    const textStyle = {
        margin: 0,
        padding: 0,
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let fName = firstName.current.value;
        let lName = lastName.current.value;
        let bName = businessName.current.value;

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid;
                console.log(uid);
            }
            else {
                console.log("not signed in");
                navigate("/signin");
            }
        });

    }   


    return(
        <div className='authPageContainer'>
            <div className="authPage">
            <h1>OnBoarding Page</h1>
                <form className="authForm">
                    <p style={textStyle}>What's your name?</p>
                    <input ref={firstName} type="text" placeholder="First name" autoFocus required/>
                    <input ref={lastName} type="text" placeholder="Last name" required/>

                    <p style={textStyle}>What's your business name?</p>
                    <input ref={businessName} type="text" placeholder="Your business name goes here" required/>

                    <p style={textStyle}>What does your business do?</p>
                    {/* Insert a dropdown menu here */}
                    
                    <button className="authFormBtn">Continue to Broker</button>
                </form>
            </div>
        </div>
    );
}

export default OnBoarding;