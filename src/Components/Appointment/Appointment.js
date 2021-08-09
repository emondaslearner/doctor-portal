import React, { useState } from 'react';
import Header from '../Header/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'
import Footer from '../Footer/Footer';
import Alert from '../Alert/Alert';

const Appointment = () => {
    const [allAppoint,setAppoint] = useState({});
    const [value, onChange] = useState(new Date());
    const [form,setFromStatus] = useState(false);
    console.log(form);

    const handleForm = (id,e) => {
        setFromStatus(true);
        setAppoint(id)
    }

    const getAppointment = [
        {
            id:1,
            names:'Teeth Orthodontics',
            time:'8:00 AM - 9:00AM',
            available:'10 space available'
        },
        {
            id:2,
            names:'Cosmetic Dentistry',
            time:'10:05 AM - 11:30AM ',
            available:'10 space available'
        },
        {
            id:3,
            names:'Teeth Orthodontics',
            time:'5:00 PM - 6:30 PM',
            available:'10 space available'
        },
        {
            id:4,
            names:'Cosmetic Dentistry',
            time:'7:00 AM - 8:30 AM',
            available:'10 space available'
        },
        {
            id:5,
            names:'Teeth Orthodontics',
            time:'2:00 PM - 3:00 PM',
            available:'10 space available'
        },
        {
            id:6,
            names:'Cosmetic Dentistry',
            time:'4:00 PM - 5:00 PM',
            available:'10 space available'
        }
            

    ]

    return (
        <>
            <div style={{backgroundImage:'url("./image/Mask-Group-2.png")',backgroundSize:'cover'}} className="appointment">
                <Header></Header>
                <div className="sort">
                    <div className="left">
                        <h1>Appointment</h1>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                    <div className="right">
                        <img src="./image/Mask Group 1.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="appointTime">
                <h2>Available appointments on {value.toDateString()}</h2>
                <div className="doctors">
                    {
                        getAppointment.map(appointment => {
                            return(
                                <div className="doctor1">
                                    <h3 className="h3">{appointment.names}</h3>
                                    <h4 className="h4" >{appointment.time}</h4>
                                    <p>{appointment.available}</p>
                                    <button onClick={() => handleForm(appointment.id)}>Book Appointment</button>
                                </div>
                            )
                        })
                    }
                </div>
                <Footer></Footer>
            </div>
            {
                form && <Alert display={setFromStatus} dateValue={value} appointText={getAppointment} id={allAppoint} ></Alert>
            }
        </>
    );
};

export default Appointment;