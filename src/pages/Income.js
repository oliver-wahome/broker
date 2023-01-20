import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
import AddIncome from '../components/AddIncome';
import '../pageStyles/Dashboard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/react-bootstrap/dist/react-bootstrap.js';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


function Income() {

    return (
        <div className="dashboardPage income">
            <DashboardMenu />

            <div className="dashboarBody">
                <h1>Income Page</h1>

                {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Income
                </button> */}

                <AddIncome />
            </div>
        </div>
    )
}

export default Income;