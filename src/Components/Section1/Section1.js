import React from 'react';
import firstServiceImg from '../../images/001-dental.png';
import secondeServiceImg from '../../images/tooth (1).png';
import thirdServiceImg from '../../images/tooth.png';
import './Section1.css'

const Section1 = () => {
    return (
        <div className="section1" >
            <h4 className="m-5 commonStyleH4 text-center">OUR SERVICE</h4>
            <h1 className="mb-5 text-center">Services We Provide</h1>
            <div className="row mb-5 services">
                <div className="col-sm-8 col-md-3 first-services">
                    <img src={firstServiceImg} alt=""/>
                    <h4 className="m-4 text-center">Fluoride Treatment</h4>
                    <p className="commonStylep text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a est obcaecati nemo. Qui, deleniti.</p>
                </div>
                <div className="col-sm-8 col-md-3 seconde-services">
                    <img src={secondeServiceImg} alt=""/>
                    <h4 className="m-4 text-center">Cavity Filling</h4>
                    <p className="commonStylep text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a est obcaecati nemo. Qui, deleniti.</p>
                </div>
                <div className="col-sm-8 col-md-3 third-services">
                    <img src={thirdServiceImg} alt=""/>
                    <h4 className="m-4 text-center">Teath Whitening</h4>
                    <p className="commonStylep text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a est obcaecati nemo. Qui, deleniti.</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;