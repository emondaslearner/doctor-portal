import React from 'react';
import Menu from '../Menu/Menu'
import HeaderImage from '../../images/Mask Group 1.png';
import HeaderBackgroundImage from '../../images/Mask Group 2.png';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div style={{background:`linear-gradient(-90deg, #3A4256 30%, rgba(0, 0, 0, 0)30%), url("${HeaderBackgroundImage}")`,backgroundSize:'100% 100%'}} className="Header">
            <Menu></Menu>
            <div className="row HeaderContent">
                <div className="col-sm-10 col-md-3 mt-3 left">
                    <h1>Your New Smile Starts Here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ea ex facere deleniti sapiente eveniet culpa eum quos quasi odio!</p>
                    <Link to="/appointment" className="CommonButton btn btn-success">GET APPOINTMENT</Link>
                </div>
                <div className="col-sm-10 col-md-5 right">
                    <img className="img-fluid" src={HeaderImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;