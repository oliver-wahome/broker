import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Income() {
  return (
    <div className="dashboardPage income">

        <DashboardMenu />

        <div className="dashboarBody">
            <h1>Income Page</h1>

            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Income
            </button>
        </div>

        {/* Add Income Modal form */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Income