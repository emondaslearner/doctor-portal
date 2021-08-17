import React, { useEffect, useState } from 'react';
import './ControlAppointment.css'
import Sidebar from '../Sidebar/Sidebar';

const ControlAppointment = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if(user.status != 'doctor'){
        window.location.replace("/dashboardAppointment")
    }
    const [data, setData] = useState([]);
    const [id,setId] = useState('');
    const [pending,setPending] = useState([]);
    const [todayAppoint,setTodayAppoint] = useState([]);
    const [finishedAppoint,setFinishedAppoint] = useState([]);
    const [allAppoint,setAllAppoint] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/RecentPost')
            .then(res => res.json())
            .then(data => setData(data))
        fetch('http://localhost:4000/Pending')
        .then(res => res.json())
        .then(data => setPending(data))

        fetch('http://localhost:4000/TodayAppointment')
        .then(res => res.json())
        .then(data => setTodayAppoint(data))

        fetch('http://localhost:4000/Finished')
        .then(res => res.json())
        .then(data => setFinishedAppoint(data))
        
        fetch('http://localhost:4000/AllAppoint')
        .then(res => res.json())
        .then(data => setAllAppoint(data))
        
        
    }, [])
    const changeStatus = (event) => {
        const status = event.target.value;
        fetch('http://localhost:4000/AppointAction',{
            method:'PUT',
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({id,status})
        })
    }
    const getId = (id) => {
        setId(id)
    }
    return (
        <div className="row controlAppointment" >
            <Sidebar></Sidebar>
            <div className="col-md-9 mainDashboard">
                <h5>Dashboard</h5>
                <div className="row seeStatus">
                    <div className="col-md-3 pending">
                        <h1>{pending.length}</h1>
                        <div className="statusInformation">
                            <p>Pending</p>
                            <p>Appointments</p>
                        </div>
                    </div>
                    <div className="col-md-3 todayAppointment">
                        <h1>{todayAppoint.length}</h1>
                        <div className="statusInformation">
                            <p>Today</p>
                            <p>Appointments</p>
                        </div>
                    </div>
                    <div className="col-md-3 totalAppointment">
                        <h1>{allAppoint.length - finishedAppoint.length}</h1>
                        <div className="statusInformation">
                            <p>Pending</p>
                            <p>Appointments</p>
                        </div>
                    </div>
                    <div className="col-md-3 totalPatients">
                        <h1>{allAppoint.length}</h1>
                        <div className="statusInformation">
                            <p>Pending</p>
                            <p>Appointments</p>
                        </div>
                    </div>
                </div>
                <div className="RecentAppoints">
                    <h5 className="m-3 commonStyleH4" >Recent Appointments</h5>
                    <table>
                        <tr>
                            <th>AppointName</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Weight</th>
                            <th>Connect</th>
                            <th>Action</th>
                        </tr>
                        {
                            data.map(data => {
                                return (
                                    <tr>
                                        <td>{data.appointName}</td>
                                        <td>{data.name}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.age}</td>
                                        <td>{data.email}</td>
                                        <td>{data.width}</td>
                                        <td>{data.phone}</td>
                                        <td><select onClick={() => getId(data._id)} onChange={changeStatus} class="StatusOfAppointment" >
                                            <option value={data.status}>{data.status}</option>
                                            <option value="Pending">Pending</option>
                                            <option value="On Going">On Going</option>
                                            <option value="Finished">Finished</option>
                                        </select></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ControlAppointment;