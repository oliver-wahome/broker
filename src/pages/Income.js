import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
import AddIncome from '../components/AddIncome';
import '../pageStyles/Dashboard.css';

function Income() {

    return (
        <div className="dashboardPage income">
            <DashboardMenu />

            <div className="dashboardBody">

                <div className="dashboardBodyHeader">
                    <h1>Income Page</h1>
                    <AddIncome />
                </div>
            </div>
        </div>
    )
}

export default Income;