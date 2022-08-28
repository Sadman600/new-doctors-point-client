import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sideber" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <h1 className='text-5xl text-primary text-center'>Welcome to Dashboard</h1>
                {/* <label for="my-drawer-3" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="dashboard-sideber" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;