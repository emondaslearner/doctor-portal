import React, { useEffect } from 'react';
import './getAppointment.css';

const GetAppointment = () => {
    useEffect(() => {
        fetch('http://localhost:4000/getByCalendar',{
            method:'POST',
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify({})
        })
    },[])
    return (
        <div className="getAppointment">
            <div className="text">
                <h5>Appointment</h5>
                <h6>on 07,Feb,2020</h6>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </table>
        </div>
    );
};

export default GetAppointment;