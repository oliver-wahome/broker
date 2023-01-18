import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Profile() {
    let firstName = "";
    let lastName = "";
    let businessName = "";
    let email = "";

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log(user.uid);
            }
            else {
                console.log("user logged out");
            }
        }, []);
    })

    return(
        <div className="profile">
            <h1>Profile Page</h1>
            <p>{firstName} {lastName}</p>
            <p>{businessName}</p>
            <p>{email}</p>
        </div>
    );
}

export default Profile;