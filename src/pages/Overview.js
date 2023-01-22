import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';

function Overview(){
    return(
        <div className="dashboardPage overview">
            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">
                    <div className="dashboardBodyHeader">
                        <h1>Overview Page</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;