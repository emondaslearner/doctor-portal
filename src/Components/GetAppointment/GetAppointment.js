import React, { useState } from 'react';
import './GetAppointment.css'
import appointImg from '../../images/Mask Group 1.png'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Menu from '../Menu/Menu';
import Appoint from '../Appoint/Appoint';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%'
    },
};

const GetAppointment = () => {
    const [value, onChange] = useState(new Date());
    const AvailableAppointment = [
        {
            id: 1,
            name: 'Teath Orthodontices',
            time: '8:00 AM - 9:00 AM',
            space: '5 SPACES AVAILABLE'
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            space: '10 SPACES AVAILABLE'
        },
        {
            id: 3,
            name: 'Teath Orthodontices',
            time: '5:00 PM - 6:30 AM',
            space: '7 SPACES AVAILABLE'
        },
        {
            id: 4,
            name: 'Cosmetic Dentistry',
            time: '7:00 AM - 8:30 AM',
            space: '5 SPACES AVAILABLE'
        },
        {
            id: 5,
            name: 'Teath Orthodontices',
            time: '3:00 PM - 4:00 PM',
            space: '5 SPACES AVAILABLE'
        },
        {
            id: 6,
            name: 'Teath Orthodontices',
            time: '5:00 PM - 6:00 AM',
            space: '5 SPACES AVAILABLE'
        }
    ]

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [appointDetails, setAppointDetails] = useState({})

    function openModal(id) {
        setIsOpen(true);
        const filterAppointment = AvailableAppointment.find(appointment => appointment.id == id);
        setAppointDetails(filterAppointment)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { register, formState: { errors }, handleSubmit } = useForm();


    const userEmail = JSON.parse(sessionStorage.getItem('user'))

    function onSubmit(data) {
        const appointInformation = { status: 'Pending', userEmail: userEmail.email, appointName: appointDetails.name, space: appointDetails.space, time: appointDetails.time, email: data.email, age: data.age, width: data.width, phone: data.phone, name: data.name, gender: data.gender, date: value.toDateString() }
        fetch('http://localhost:4000/insertAppoint', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(appointInformation)
        })
        window.location.reload()
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
    return (
        <div className="getAppointment" >
            <Menu></Menu>
            <div className="row AppointHeader">
                <div className="col-md-4 Calender">
                    <h3 className="m-3" >Appointment</h3>
                    <Calendar
                        className="CalendarStyle"
                        onChange={onChange}
                        value={value}
                    ></Calendar>
                </div>
                <div className="col-xl-5 col-md-6 AppointImg">
                    <img className="img-fluid" src={appointImg} alt="" />
                </div>
            </div>
            <div className="row AvailableAppointment">
                <h1 className="text-center commonStyleH4 mb-4">Available Appointment on February 7 2021</h1>
                {
                    AvailableAppointment.map(appoint => {
                        return (
                            <Appoint openModal={openModal} appoint={appoint} ></Appoint>
                        )
                    })
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {
                    user.status == 'doctor' ? <h2 className="text-center" ref={(_subtitle) => (subtitle = _subtitle)}>You are a Doctor.You can not GetAppointment</h2>
                        : <div>
                            <h2 className="text-center" ref={(_subtitle) => (subtitle = _subtitle)}>{appointDetails.name}</h2>
                            <button className="close" onClick={closeModal}>x</button>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Name" className="form-control" {...register("name", { required: true })} />
                                <p className="appointError text-center" >{errors.name?.type === 'required' && "Name is empty"}</p>

                                <input placeholder="Email" className="form-control" {...register("email", { required: true })} />
                                <p className="appointError text-center" >{errors.email?.type === 'required' && "Email is empty"}</p>

                                <input placeholder="Phone number" className="form-control" {...register("phone", { required: true })} />
                                <p className="appointError text-center" >{errors.phone?.type === 'required' && "Phone number is empty"}</p>
                                <div className="row physicalInformation">
                                    <select className="form-control col-md-3 gender" {...register("gender")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                    </select>

                                    <div className="col-md-4 width">
                                        <input placeholder="Width" className="form-control" {...register("width", { required: true })} />
                                        <p className="appointError text-center" >{errors.width?.type === 'required' && "Width is empty"}</p>
                                    </div>

                                    <div className="col-md-4 age">
                                        <input placeholder="Age" className="col-md-3 form-control" {...register("age", { required: true })} />
                                        <p className="appointError text-center" >{errors.age?.type === 'required' && "Age is empty"}</p>
                                    </div>
                                </div>
                                <input className="btn btn-success CommonButton m-auto d-block" type="submit" />
                            </form>
                        </div>
                }
            </Modal>
        </div>
    );
};

export default GetAppointment;