import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import LoginRightImg from '../../images/Group 140.png'
import './Login.css'

const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } }
    const [user, setUser] = useState({
        email: null,
        password: null,
        name: null,
        status: 'user'
    });
    const [error, setError] = useState('');
    const [loginError, setLoginError] = useState('');
    // check is sign in or up
    const [isSignIn, setIsSignIn] = useState(true);

    const changeStatusOfLoginPage = () => {
        setIsSignIn(!isSignIn)
    }

    // taking user value when blur the input
    let email = null;
    let password = null;

    const takingUserValue = (e) => {

        if (e.target.name == 'email') {
            const validEmail = /\S+@\S+\.\S+/;
            email = validEmail.test(e.target.value)
        }
        if (e.target.name == 'password') {
            if (e.target.value.length > 5) {
                const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
                password = validPassword.test(e.target.value)
            } else {
                password = 'length';
            }
        }

        if (password == false) {
            setError('Password must have uppercase lowercase and digit')
        } else if (password == 'length') {
            setError('Password must be 6 character longer');
        } else if (email == false) {
            setError('Email is not valid');
        } else {
            setError('')
        }


        if (email && e.target.name == 'email') {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
        if (password && e.target.name == 'password') {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
        if (e.target.name == 'name') {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }

    }

    //adding user
    const addUsers = (e) => {
        e.preventDefault();
        if (user.email != null && user.password != null && user.email != '' && user.password != '') {
            const checkUser = user.email;
            if (isSignIn == false) {
                fetch('http://localhost:4000/checkEmail', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({ checkUser })
                })
                    .then(res => res.json())
                    .then(data => setError('Email is already exist'))
                    .catch(error => {
                        fetch('http://localhost:4000/login', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                            body: JSON.stringify(user)
                        })
                        sessionStorage.setItem('user', JSON.stringify(user))
                        history.replace(from);
                    })
            } else {
                fetch('http://localhost:4000/checkEmail', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({ checkUser })
                })
                    .then(res => res.json())
                    .then(data => {
                        data.map(data => {
                            if (data.email == user.email && data.password == user.password) {
                                sessionStorage.setItem('user', JSON.stringify(data))
                                history.replace(from);
                            } else {
                                setLoginError('Information is not valid')
                            }
                        })
                    })
                    .catch(error => {
                        setLoginError('Information is not valid')
                    })
            }
        }
        else {
            setError('information is not be empty');
        }

    }
    const [checkIt, setCheckIt] = useState(false);
    const forgetClick = () => {
        if (user.email == null) {
            setLoginError('Enter you account email to change password')
        } else {
            sessionStorage.setItem('email',user.email)
            window.location.replace('/Forget')
        }
    }
    return (
        <div className="row Login" >
            <form onSubmit={addUsers} className="col-md-4 LoginForm " action="">
                <h5 className="text-center m-4" >{isSignIn ? 'Login' : 'Sing In'}</h5>
                <p className="text-danger text-center" >{isSignIn == false && error}</p>
                <p className="text-danger text-center" >{isSignIn && loginError}</p>
                {
                    isSignIn == false && <input placeholder="Name" onBlur={takingUserValue} name="name" className="form-control" type="text" />
                }
                <input placeholder="Email" onBlur={takingUserValue} name="email" className="mt-4 form-control" type="text" />
                <input placeholder="Password" onBlur={takingUserValue} name="password" className="mt-4 form-control" type="password" />
                <input className="btn btn-success d-block m-auto mt-3 CommonButton" type="submit" />
                <a onClick={changeStatusOfLoginPage} className="commonStylep d-block m-4 text-center" >{isSignIn ? "Don't have account" : 'Have a account'}</a>
                <Link onClick={forgetClick} id="forget" className="commonStylep d-block m-4 text-center">{isSignIn && 'Forget Password'}</Link>
            </form>
            <div className="col-md-5 LoginImg">
                <img className="img-fluid" src={LoginRightImg} alt="" />
            </div>
        </div>
    );
};

export default Login;