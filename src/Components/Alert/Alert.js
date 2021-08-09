import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Alert.css';

const Alert = (props) => {
    const items = props.appointText;
    const itemId = props.id;
    const find = items.find(item => item.id == itemId);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) => {
        event.preventDefault();
        const all = {email:data.email,name:data.name,age:data.age,phone:data.phone,gender:data.gender,width:data.width,appointName:find.names,appointTime:find.time,date:props.dateValue}
        fetch('https://secure-thicket-00683.herokuapp.com/appoint', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(all)
        })
        .then(res => res.json())
        .then(data => {   
        })
        setSuccess('success your appointment');
        props.display(false)
    }
    const hide = (event) => {
        event.preventDefault();
        props.display(false)
    }
    const [success, setSuccess] = useState('');
    return (
        <div className="formAlert">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{find.names}</h2>
                <h5>on{props.dateValue.toDateString()}</h5>
                <input placeholder="Name" {...register("name", { required: true })} />
                {errors.name && <span className="p" >Name is required</span>}
                <input placeholder="Phone Number" {...register("phone", { required: true })} />
                {errors.phone && <span className="p" >Phone number is required</span>}
                <input placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className="p" >Email is required</span>}
                <div className="row">
                    <div className="select">
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div class="rowInput">
                        <input placeholder="Your Age" {...register("age", { required: true })} />
                        {errors.age && <span className="p" >Age is required</span>}                     
                    </div>
                    <div class="rowInput">
                        <input placeholder="Your Width" {...register("width", { required: true })} />
                        {errors.width && <span className="p" >Width is required</span>}
                    </div>
                </div>
                <input className="send" type="submit" />
                <button onClick={hide} className="close">x</button>
            </form>
        </div>
    );
};

export default Alert;