import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Overview(){

    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
        labels: labels,
        datasets: [
            {
              label: "Income",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [50000, 80000, 65000, 100000, 130000, 90000, 150000],
            },
            {
              label: "Expenses",
              backgroundColor: "blue",
              borderColor: "blue",
              data: [20000, 95000, 40000, 25000, 99000, 120000, 125000],
            },
        ],
    };

    let navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
            if(user){
                console.log("user is logged in");
            }
            else {
                console.log("user is not logged in");
                navigate("/register");
            }
        });
    }, [navigate])

    return(
        <div className="dashboardPage overview">
            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">
                    <div className="dashboardBodyHeader">
                        <h1>Overview Page</h1>
                    </div>
                    <div style = {{height: "75vh", width: "80%"}}>
                        <Line data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;