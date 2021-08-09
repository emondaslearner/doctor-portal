import React, { useEffect, useState } from 'react';
import './AllAppointments.css'
import Header from '../Header/Header';

const AllAppointments = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://secure-thicket-00683.herokuapp.com/getAppoint')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    const get = sessionStorage.getItem('user');
    const check = data.filter(val => val.email == get)
    return (
        <div style={{backgroundImage:'url("./image/Mask-Group-2.png")',backgroundSize:'100% 100%'}} className="AllAppointments">
            <Header></Header>
            <div className="list">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Teeth Problem</th>
                        <th>Time</th>
                        <th>Date of appoint</th>
                        <th>Status</th>
                    </tr>
                    {
                        check.map(value => {
                            return(
                                <tr>
                                    <td>{value.number}</td>
                                    <td>{value.catName}</td>
                                    <td>{value.text}</td>
                                    <td>May 7 2022</td>
                                    <td><a href="">Delete</a></td>
                                </tr>
                            )
                        })
                    }
                    
                </table>
            </div>
        </div>
    );
};

export default AllAppointments;