import React, { useContext, useEffect, useState } from 'react';
import './ForgetPassword.css'

const ForgetPassword = () => {
    const userEmail = sessionStorage.getItem('email')
    const [isEmailHave, setIsEmailHave] = useState('')
    useEffect(() => {
        fetch('http://localhost:4000/CheckEmailIsValid', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ userEmail })
        })
            .then(res => res.json())
            .then(data => setIsEmailHave(data[0].email))
            .catch(error => error)
    }, [])
    const sendMail = () => {
        const random = Math.round(Math.random() * 100000)
        sessionStorage.setItem('randomCode',random);
        fetch('http://localhost:4000/mail',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({code:random,email:userEmail})
        })
        .then(res => res.json())
        .then(data => data)
        window.location.replace("/checkCode")
    }
    return (
        <div className="Forget" >
            <div className="m-auto col-md-5 sendCode">
                {
                    isEmailHave ? <div>
                        <h4 className="mt-3 commonStyleH4 text-center" >Send code via email</h4>
                        <div className="d-flex forgetInformation">
                            <p class="commonStylep mt-2 pt-2" >{userEmail}</p>
                            <button onClick={sendMail} className="CommonButton btn btn-success mt-2 m-3" >Send</button>
                        </div>
                    </div>
                    : <h4 className="commonStyleH4 p-4 text-center text-danger" >you do not have any account via this email.</h4>
                }
            </div>
        </div>
    );
};

export default ForgetPassword;