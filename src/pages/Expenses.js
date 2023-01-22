import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import AddExpenses from '../components/AddExpenses';
import '../pageStyles/Dashboard.css';

function Expenses() {
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