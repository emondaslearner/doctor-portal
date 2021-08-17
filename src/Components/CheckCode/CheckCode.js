import React, { useState } from 'react';
import './CheckCode.css'

const CheckCode = () => {
    const [codeError,setCodeError] = useState('')
    const code = (e) => {
        e.preventDefault();
        const value = document.querySelector('.first').value;
        const sentValue = sessionStorage.getItem('randomCode');
        if(value == sentValue){
            window.location.replace('/changePassword')
        }else{
            setCodeError('Verification code is not valid')
        }
    }
    return (
        <div className="checkCode" >
            <form className="col-md-4 col-sm-8" action="">
                <h4 className="text-center commonStyleH4" >Enter Code</h4>
                <p className="text-center text-danger">{codeError}</p>
                <input placeholder="Enter code" className="first form-control" type="text" />
                <input onClick={code} className="m-auto mt-3 d-block btn btn-success CommonButton" type="submit" />
            </form>
        </div>
    );
};

export default CheckCode;