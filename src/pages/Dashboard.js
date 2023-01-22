import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';

function Dashboard() {

    return (
        <div className="dashboardPage">

            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">

                    <h1>Dashboard Page</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;