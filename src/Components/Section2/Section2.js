import React from 'react';
import './Section2.css';
import dentalCareImg from '../../images/Mask Group 3.png'
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <div className="mt-5 mb-5 row section2" >
            <img className="col-sm-8 img-fluid col-md-4" src={dentalCareImg} alt=""/>
            <div className="col-sm-9 p-5 col-md-5 dentalContent">
                <h1>Exceptional Dental Care,on Your Terms</h1>
                <p className="mt-4 mb-4 commonStylep">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos nam saepe modi mollitia nisi magnam expedita, suscipit rerum rem, iusto magni. Sapiente rerum sit minima voluptate aspernatur voluptatem architecto, unde odio facere cumque asperiores! Obcaecati explicabo corporis libero commodi ipsum modi velit eos vitae!</p>
                <Link to="/appointment" className="CommonButton btn btn-success" >Learn More</Link>
            </div>
        </div>
    );
};

export default Section2;