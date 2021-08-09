import React, { useRef, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Header from '../Header/Header';
import './Login.css'
import firebaseConfig from '../firebaseConfig/firebaseConfig';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [user,setUser] = useState({
        password:'',
        email:''
    })
    const [isSingIn,setIsSingIn] = useState(true)
    const [error,setError] = useState('');
    const change = (e) => {
        let userValid = false;
        if(e.target.name == 'email'){
            const emailValid = /\S+@\S+\.\S+/
            userValid = emailValid.test(e.target.value);
        }
        if(e.target.name == 'password'){
            const passValid = /(?=.*[A-Z])(?=.*\d)/
            userValid = passValid.test(e.target.value);
        }
        if(userValid){
            const set = {...user};
            set[e.target.name] = e.target.value;
            setUser(set);
        }else{
            setError(e.target.name+' is not valid')
        }
        
    }

    const submit = (event) => {
        event.preventDefault();
       if(isSingIn){
            if(user.email != '' && user.password != ''){
                fetch('https://secure-thicket-00683.herokuapp.com/addUser',{
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body:JSON.stringify({
                        username:document.querySelector('.name').value,
                        email:user.email,
                        password:user.password
                    })
                })
                setIsSingIn(false);
                setError('');
            }
        }else{
            fetch('https://secure-thicket-00683.herokuapp.com/get')
            .then(res => res.json())
            .then(data => {
                data.map(allUser => {
                    if(user.email == allUser.email){
                        if(user.password == allUser.password){
                            history.replace(from);
                        }
                    }else{
                        setError('username and password is not valid')
                    }
                })
            })
        }
    }
    const changeStatus = (event) => {
        event.preventDefault()
        setIsSingIn(!isSingIn)
    }
    return (
        <div className="login" >
            <Header></Header>
            <div className="form">
                <div className="left">
                    <form action="">
                        <h3>{
                            isSingIn ? 'Sign Up' :'Login'
                        }</h3>
                        {
                            error != '' && <p className="error" >{error}</p>
                        }
                        {
                            isSingIn && <input name="username" className="name" placeholder="Name" type="text"/>
                        }
                        <input name="email" onBlur={change} placeholder="Email" type="email"/>
                        <input name="password" onBlur={change} placeholder="Password" type="password"/>
                        {
                            isSingIn && <label htmlFor="">password must be 6 character number and uppercase</label>
                        }
                        <button className="last" onClick={submit}>{isSingIn ? 'Sign Up' : 'Login'}</button>
                        <a onClick={changeStatus} href="">{
                            isSingIn ? 'Already have a account' :'Create a account'
                        }</a>
                    </form>
                </div>
                <div className="right">
                    <img src="./image/Group 140.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;