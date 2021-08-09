import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
       <div className="main-calendar">
            <div className="calendar">
                <h3>Appointment</h3>
                <Calendar
                    className="emon"
                    onChange={onChange}
                    value={value}
                />
            </div>
       </div>
    );
};

export default Calender;