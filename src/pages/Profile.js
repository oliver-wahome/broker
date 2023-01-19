import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Profile() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        businessName: "",
        email: ""
    });

    let [executed, setExecuted] = useState({run: false});
    //setExecuted(false);
    let execCheck = executed.run;

    useEffect(() => {
        const auth = getAuth();
        if(!execCheck){
            onAuthStateChanged(auth, async function(user) {
                if(user){
                    console.log(user.uid);
                    //getting data from the firestore database
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
    
                    if(docSnap.exists()){
                        console.log(docSnap.data());
                        setUser({ 
                            firstName: docSnap.data().firstName, 
                            lastName: docSnap.data().lastName,
                            businessName: docSnap.data().businessName,
                            email: docSnap.data().email
                        });
                    }
                    else {
                        console.log("document data doesn't exist");
                    }
                }
                else {
                    console.log("user logged out");
                }
            }, []);

            setExecuted({run: true});
        }
        
    }, [execCheck]);

    return(
        <div className="profile">
            <h1>Profile Page</h1>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.businessName}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default Profile;