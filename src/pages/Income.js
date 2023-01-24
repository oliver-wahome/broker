import React, { useState, useEffect } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import AddIncome from '../components/AddIncome';
import '../pageStyles/Dashboard.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Table from 'react-bootstrap/Table';

function Income() {

    let navigate = useNavigate();

    const [income, setIncome] = useState([]);

    useEffect(() => {
        const auth = getAuth();
        //checking if the user is logged. If so, getting their userId
        onAuthStateChanged(auth, async function(user){
            if(user){
                setIncome([]);
                //getting all document data from income subcollection
                const incomeData = collection(db, "users", user.uid, "income");
                const querySnapshot = await getDocs(incomeData);

                //looping through all the documents in the income subcollection
                querySnapshot.forEach(function(doc){
                    //pushing each document to income state array
                    setIncome(current => [...current, doc.data()]);
                });
            }
            else {
                console.log("user is not logged in");
                navigate("/signin");
            }
        });
        
    }, [navigate], [income]);

    return (
        <div className="dashboardPage income">

            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">
                    <div className="dashboardBodyHeader">
                        <h1>Income Page</h1>
                        <AddIncome />
                    </div>

                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Client Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            income.map((element, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{element.clientName}</td>
                                        <td>Ksh. {element.amount}</td>
                                        <td>{element.date}</td>
                                        <td>{element.time}</td>
                                        <td>{element.description}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Income;