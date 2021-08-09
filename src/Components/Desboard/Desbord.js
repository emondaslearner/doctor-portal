import React from 'react';
import './Desbord.css';
import Calender from './getAppointment/Calender/Calender';
import GetAppointment from './getAppointment/getAppointment';
import Sidebar from './Sidebar/Sidebar';

const Desbord = () => {
    return (
        <div className="desboard">
            <Sidebar></Sidebar>
            <Calender></Calender>
            <GetAppointment></GetAppointment>
        </div>
    );
};

export default Desbord;