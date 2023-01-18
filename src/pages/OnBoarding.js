import React from 'react';

function OnBoarding(){
    return(
        <div className='onboarding'>
            <h1>OnBoarding Page</h1>

            <form className="authForm">
                <p>What's your name?</p>
                <input type="text" placeholder="First name" autoFocus required/>
                <input type="text" placeholder="Last name" required/>

                <p>What's your business name?</p>
                <input type="text" placeholder="Your business name goes here" required/>

                <p>What does your business do?</p>
                {/* Insert a dropdown menu here */}
                
                <button className="authFormBtn">Continue to Broker</button>
            </form>
        </div>
    );
}

export default OnBoarding;