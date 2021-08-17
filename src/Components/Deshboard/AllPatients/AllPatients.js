import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AllPatients.css'

const AllPatients = () => {
    const [data, setData] = useState([])
    const [id,setId] = useState('');
    const user = JSON.parse(sessionStorage.getItem('user'))
    useEffect(() => {
        fetch('http://localhost:4000/allPatients', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setData(data))
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
        <div className="row AllPatients" >
            <Sidebar></Sidebar>
            <h5 className="m-3" ></h5>
            <div className="Patients">
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
    );
};

export default AllPatients;