import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = (e) => {
    const [displayUl,setDisplay] = useState(false)
    const Menu = (e) => {
        e.preventDefault();
        if(displayUl == false){
            setDisplay(true)
        }else{
            setDisplay(false)
        }
        if(displayUl){
            document.querySelector('.Menu ul').style.opacity = '1';
            document.querySelector('.Menu ul').style.display = 'block';
            document.querySelector('.Menu ul').classList.add('animation')
        }else{
            document.querySelector('.Menu ul').style.opacity = '0'
            document.querySelector('.Menu ul').style.display = 'none'
            document.querySelector('.Menu ul').classList.remove('animation')
        }
    }
    const user = JSON.parse(sessionStorage.getItem('user'));
    const singOut = () => {
        sessionStorage.removeItem('user')
    }
    return (
        <div className="Menu">
            <div className="toggle">
                <h3>Menu</h3>
                <a onClick={Menu} href=""><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></a>
            </div>
            <ul>
                <Link to="/" >Home</Link>
                <Link to="/dashboard" >DashBoard</Link>
                <Link to="/appointment" >GetAppointment</Link>
                <a href="#doctors">Doctors</a>
                <a href="#blog">Blog</a>
                <a href="#connect_section">Contact Us</a>
                {
                    user ?<a onClick={singOut} href="">Sing Out</a>:<Link to="/login">Sing In</Link>
                }
            </ul>
        </div>
    );
};

export default Menu;