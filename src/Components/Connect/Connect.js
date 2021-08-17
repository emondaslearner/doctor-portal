import React from 'react';
import './Connect.css'
import connectBg from '../../images/Mask Group 4.png'
const Connect = () => {
    return (
        <div id="connect_section" style={{backgroundImage:`url("${connectBg}")`}} className="Connect" >
            <div className="connectLayout">
                <h4 className="text-center commonStyleH4 pt-5 pb-3" >CONNECT US</h4>
                <h1 className="text-white text-center">Always Connect With Us</h1>
                <form className="col-md-6 m-auto" action="">
                    <input className="form-control mt-4" placeholder="Email Address*" type="text"/>
                    <input className="form-control mt-4" placeholder="Subject*" type="text"/>
                    <textarea className="form-control mt-4" name="" id="" cols="30" rows="10">
                        Your Message*
                    </textarea>
                    <input className="btn btn-success CommonButton submit" type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Connect;