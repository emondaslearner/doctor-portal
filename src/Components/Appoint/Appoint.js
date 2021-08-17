import React from 'react';
import './Appoint.css'

const Appoint = (props) => {
    return (
        <div className="col-md-4 Appoint" >
            <h4 className="text-center commonStyleH4" >{props.appoint.name}</h4>
            <h5 className="text-center">{props.appoint.time}</h5>
            <p className="text-center commonStylep" >{props.appoint.space}</p>
            <button onClick={() => props.openModal(props.appoint.id)} className="CommonButton btn btn-success m-auto d-block" >BOOK APPOINTMENT</button>
        </div>
    );
};

export default Appoint;