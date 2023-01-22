import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
import AddExpenses from '../components/AddExpenses';
import '../pageStyles/Dashboard.css';

function Expenses() {
    return (
      <div className="dashboardPage income">
          <DashboardMenu />
  
          <div className="dashboardBody">
            <div className="dashboardBodyHeader">
                <h1>Income Page</h1>
                <AddExpenses />
            </div>
          </div>
      </div>
    )
}
  
export default Expenses;