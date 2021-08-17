import React, { useState } from 'react';
import './ChangePassword.css'
const ChangePassword = () => {
    const [passwordError, setPasswordError] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const password = (e) => {
        let passwords = null;
        if (e.target.value.length > 5) {
            const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
            passwords = validPassword.test(e.target.value)
        } else {
            passwords = 'length';
        }

        if (passwords == false) {
            setPasswordError('Password must have uppercase lowercase and digit')
        } else if (passwords == 'length') {
            setPasswordError('Password must be 6 character longer');
        } else {
            setPasswordError('')
            setChangePassword(e.target.value);
        }
    }
    const changePass = (e) => {
        e.preventDefault()
        const email = sessionStorage.getItem('email')
        const pass = changePassword;
        if (pass != '') {
            fetch('http://localhost:4000/changePassword', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify({email,pass})
            })
            .then(res => res.json())
            .then(data => window.location.replace('/'))
            window.location.replace('/login')
        } else {
            setPasswordError('password is empty')
        }
    }
    return (
        <div className="changePassword" >
            <form className="col-md-5 col-sm-8" action="">
                <h4 className="commonStyleH4 text-center" >Enter new password</h4>
                <p className="text-center text-danger">{passwordError}</p>
                <input onBlur={password} className="form-control" placeholder="Enter new password" type="text" />
                <input onClick={changePass} className="btn btn-success CommonButton d-block m-auto mt-3" type="submit" />
            </form>
        </div>
    );
};

export default ChangePassword;