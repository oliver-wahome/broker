import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import AddExpenses from '../components/AddExpenses';
import DeleteRow from '../components/DeleteRow';
import EditRow from '../components/EditRow';
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
                setExpense([]);
                const expenseData = collection(db, "users", user.uid, "expenses");
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

                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Expense</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            expense.map((element, index) => {
                                let date = new Date(element.date).toDateString();
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{element.expense}</td>
                                        <td>Ksh. {element.amount}</td>
                                        <td>{date}</td>
                                        <td>{element.time}</td>
                                        <td><EditRow /></td>
                                        <td><DeleteRow subCollection={"expenses"} userId={element.userId} docId={element.expenseId} /></td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
  
export default Expenses;