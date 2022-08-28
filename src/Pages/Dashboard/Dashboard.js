import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sideber" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
                <h1 className='text-5xl text-primary text-center'>Welcome to Dashboard</h1>
                {/* <label for="my-drawer-3" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sideber" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;