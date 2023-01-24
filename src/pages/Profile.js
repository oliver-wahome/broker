import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import { useNavigate } from 'react-router-dom';

function Profile() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        businessName: "",
        email: ""
    });

    useEffect(() => {
        const auth = getAuth();
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
                navigate("/signin");
            }
        }, []);  
    });

    return(
        <div className="dashboardPage profile">

            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">
                    <div className="dashboardBodyHeader">
                        <h1>Profile Page</h1>
                    </div>
                    <div className="dashboardBodyContent">
                        <p>{user.firstName} {user.lastName}</p>
                        <p>{user.businessName}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;