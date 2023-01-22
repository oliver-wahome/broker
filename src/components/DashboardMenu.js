import React from 'react';
import { Link } from 'react-router-dom';

function DashboardMenu(){
    return(
        <div className="dashboardMenu">
            <Link to="/dashboard" className="dashboardMenuItem">Dashboard</Link>
            <Link to="/income" className="dashboardMenuItem">Income</Link>
            <Link to="/expenses" className="dashboardMenuItem">Expenses</Link>
            <Link to="/overview" className="dashboardMenuItem">Overview</Link>
        </div>
    );
}

export default DashboardMenu;