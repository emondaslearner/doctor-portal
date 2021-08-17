import React from 'react';
import './Section3.css'
import DoctorImg from '../../images/5790-removebg.png'
import AppointmentBgImg from '../../images/Mask Group 4.png'
import { Link } from 'react-router-dom';
const Section3 = () => {
    return (
        <div style={{backgroundImage:`url("${AppointmentBgImg}")`,backgroundSize:'130% 100%'}} className="mainAppointment">
            <div className="row Appointment">
                <img className="col-sm-4 col-md-5" src={DoctorImg} alt=""/>
                <div className="col-sm-4 col-md-6 AppointmentContent">
                    <h4 className="commonStyleH4" >APPOINTMENT</h4>
                    <h1>Make an Appointment Today</h1>
                    <p className="commonStylep">It is a long established fact that a render will be distracted by the readable content of a page when looking at its</p>
                    <Link to="/appointment" className="CommonButton btn btn-success">Learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default Section3;