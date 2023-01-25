import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import AddExpenses from '../components/AddExpenses';
import '../pageStyles/Dashboard.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Table from 'react-bootstrap/Table';

function Expenses() {
    let navigate = useNavigate();

    const [expense, setExpense] = useState([]);

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, async function(user){
            if(user){
                const expenseData = collection(db, "users", user.uid, "expense");
                const querySnapshot = await getDocs(expenseData);

                //looping through all expense subcollection documents
                querySnapshot.forEach((doc) => {
                    //pushing each document object to the expense state array
                    setExpense(current => [...current, doc.data()]);
                });
            }
            else {
                console.log("user is not logged in");
                navigate("/signin");
            }
        });
    }, [navigate], [expense]);

    return (
        <div className="dashboardPage expenses">
            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">
                    <div className="dashboardBodyHeader">
                        <h1>Expenses Page</h1>
                        <AddExpenses />
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Expenses;