import React, { useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Profile() {

    useEffect(() => {
        console.log("component loaded");;
    })

    return(
        <div className="profile">
            Profile Page
        </div>
    );
}

export default Profile;