import React, { useEffect, useState } from 'react';
import './AppoinmentByDate.css'
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const AppointmentByDate = () => {
    const [value, onChange] = useState(new Date())
    const [data, setData] = useState([])
    const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    user.date = value.toDateString();
    useEffect(() => {
        fetch('http://localhost:4000/appointment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [value])
    const deletes = (id) => {
        fetch('http://localhost:4000/deleteAppoint',{
            method:'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({id})
        })
        window.location.reload()
    }
    return (
        <div className="row AppointmentByDate" >
            <Sidebar></Sidebar>
            <div className="col-md-4 DashboardCalendar">
                <h3 className="m-3 mb-3">Appointment</h3>
                <Calendar
                    className="CalendarStyle"
                    onChange={onChange}
                    value={value}
                ></Calendar>
            </div>
            <div className=" col-md-6 appointments">
                <table>
                    <tr>
                        <th>AppointName</th>
                        <th>Email</th>
                        <th>Time</th>
                        <th>Delete</th>
                    </tr>
                    {
                        data.map(data => {
                            return (
                                <tr>
                                    <td>{data.appointName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.time}</td>
                                    <td onClick={() => deletes(data._id)} className="btn btn-success" >Delete</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default AppointmentByDate;