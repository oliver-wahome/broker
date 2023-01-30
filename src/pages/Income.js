import React, { useState, useEffect } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import AddIncome from '../components/AddIncome';
import DeleteRow from '../components/DeleteRow';
import EditRow from '../components/EditRow';
import '../pageStyles/Dashboard.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Table from 'react-bootstrap/Table';

function Income() {

    let navigate = useNavigate();

    const [totalIncome, setTotalIncome] = useState(0);
    const [income, setIncome] = useState([]);
    const [userId, setUserId] = useState('0');

    useEffect(() => {
        const auth = getAuth();
        //checking if the user is logged. If so, getting their userId
        onAuthStateChanged(auth, async function(user){
            if(user){
                setIncome([]);
                setUserId(user.uid);
                //getting all document data from income subcollection
                const incomeData = collection(db, "users", userId, "income");
                const querySnapshot = await getDocs(incomeData);

                //looping through all the documents in the income subcollection
                querySnapshot.forEach((doc) => {
                    //pushing each document to income state array
                    setIncome(current => [...current, doc.data()]);
                });

                //calculating the total income and printing it to screen
                getTotalIncome();
            }
            else {
                console.log("user is not logged in");
                navigate("/signin");
            }
        });
        
    }, [navigate, userId], [income]);

    const getTotalIncome = async () => {
        let totIncome = 0;
        const incomeData = query(collection(db, "users", userId, "income"));
        const querySnapshot = await getDocs(incomeData);

        querySnapshot.forEach((doc) => {
            const docIncome = parseInt(doc.data().amount);
            totIncome += docIncome;
        });

        setTotalIncome(totIncome);
    }

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

                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Client Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Description</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            income.map((element, index) => {
                                let date = new Date(element.date).toDateString();
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{element.clientName}</td>
                                        <td>Ksh. {element.amount}</td>
                                        <td>{date}</td>
                                        <td>{element.time}</td>
                                        <td>{element.description}</td>
                                        <td><EditRow subCollection={"income"} userId={element.userId} docId={element.incomeId}/></td>
                                        <td><DeleteRow subCollection={"income"} userId={element.userId} docId={element.incomeId}/></td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>

                    <p>The total income amount = Ksh. {totalIncome}</p>
                </div>
            </div>
        </div>
    )
}

export default Income;