import React, { useState } from "react";
import './AddDoctors.css'
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar'

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [file, setFile] = useState(null)
    const [doctor, setDoctors] = useState('');
    const [doctorError, setDoctorsError] = useState('')

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('phone', data.phone)
        formData.append('status', 'doctor')

        const checkUser = data.email;

        fetch('http://localhost:4000/checkEmail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ checkUser })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data[0].email);
                setDoctorsError('Email already exist')
                setDoctors('')
            })
            .catch(error => {
                fetch('http://localhost:4000/AddDoctors', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => {
                        console.error(error)
                    })
                setDoctors('Added Doctor successfully')
                setDoctorsError('')
            })


    }

    const changeFile = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <div className="row AddDoctors">
            <Sidebar></Sidebar>
            <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
                <h4 className="commonStyleH4 mt-3 mb-3">Add Doctors</h4>
                <p className="text-center text-success" >{doctor}</p>
                <p className="text-center text-danger" >{doctorError}</p>

                <input className="form-control" placeholder="Enter Doctor Name" {...register("name", { required: true })} />
                <p className="appointError text-center" >{errors.name?.type === 'required' && "Name is empty"}</p>

                <input className="form-control" placeholder="Enter Doctor Email" {...register("email", { required: true })} />
                <p className="appointError text-center" >{errors.email && "Email is empty"}</p>

                <input className="form-control" placeholder="Enter Doctor Phone Number" {...register("phone", { required: true })} />
                <p className="appointError text-center" >{errors.phone && "Phone number is empty"}</p>

                <input className="form-control" type="password" placeholder="Enter password" {...register("password", { required: true })} />
                <p className="appointError text-center" >{errors.password && "Password is empty"}</p>

                <input onChange={changeFile} type="file" />

                <input className="btn btn-success CommonButton m-auto" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctors;