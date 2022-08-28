import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from './Loading';
import logo from '../../images/doc-point-logo.png';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    if (error) {
        console.log(error?.message);
    }
    if (loading) {
        return <Loading></Loading>
    }
    const myMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li>
            {
                user && <Link to='dashboard'>Dashboard</Link>
            }
        </li>
        <li>
            {
                user ? <button className="btn btn-ghost capitalize" onClick={logout} >Sign Out</button> : <Link to='/login'>Login</Link>
            }
        </li>
        <li>
            {
                user ? '' : <Link to='/signup'>Sign Up</Link>
            }
        </li>
    </>
    return (
        <div className='w-5/6 mx-auto'>
            <div className="navbar bg-base-100">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                myMenu
                            }
                        </ul>
                    </div>
                    <Link to='/'>
                        <img  src={logo} alt='doctors point'></img>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            myMenu
                        }
                    </ul>
                </div>

                <div className="navbar-end lg:hidden">
                    {/* <label  className="btn btn-primary drawer-button lg:hidden">x</label> */}
                    <label for="dashboard-sideber" tabindex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;