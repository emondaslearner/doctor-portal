import React from 'react';
import './Doctors.css'
import DoctorImg from '../../images/5790-removebg.png'

const Doctors = () => {
    return (
        <div id="doctors" className="row Doctors" >
            <h4 className="text-center commonStyleH4 m-5" >OUT DOCTORS</h4>
            <div className="col-md-3 img">
                <img className="img-fluid" src={DoctorImg} alt=""/>
                <h5 className="text-center mt-4">Dr.Caudi</h5>
                <p className="commonStylep text-center">+61 452 200 126</p>
            </div>
            <div className="col-md-3 img">
                <img className="img-fluid" src={DoctorImg} alt=""/>
                <h5 className="text-center mt-4">Dr.Caudi</h5>
                <p className="commonStylep text-center">+61 452 200 126</p>
            </div>
            <div className="col-md-3 img">
                <img className="img-fluid" src={DoctorImg} alt=""/>
                <h5 className="text-center mt-4">Dr.Caudi</h5>
                <p className="commonStylep text-center">+61 452 200 126</p>
            </div>
        </div>
    );
};

export default Doctors;