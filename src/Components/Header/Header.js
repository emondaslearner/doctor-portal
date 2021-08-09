import React from 'react';
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Header = () => {
    const user = sessionStorage.getItem('user');
    const signOut = (event) => {
        sessionStorage.removeItem('user')
    }
    return (
        <div className="header">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/appointment">Get Appointment</Link>
                <Link className="white" to="/AllAppointment">Appointments</Link>
                {
                    user?<a onClick={signOut} className="white" href="">Sign Out</a>:<Link className="white" to="/Login">Sign up</Link>
                }
            </div>
        </div>
    );
};

export default Header;