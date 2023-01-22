import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';

function Overview(){
    return(
        <div className="dashboardPage overview">
            <DashboardMenu />

            <div className="dashboardBody">
                <div className="dashboardBodyHeader">
                    <h1>Overview Page</h1>
                </div>
            </div>
        </div>
    );
}

export default Overview;