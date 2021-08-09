import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="main-side">
            <div className="sidebar" >
                <ul>
                    <a href="">Dashboard</a>
                    <a href="">Appointment</a>
                    <a href="">Patients</a>
                    <a href="">Prescriptions</a>
                    <a href="">Setting</a>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;