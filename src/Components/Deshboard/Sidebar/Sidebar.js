import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCalendar, faFileMedicalAlt, faChessBoard,faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const CloseSideBar = (e) => {
        e.preventDefault();
        document.querySelector('.Sidebar').classList.remove('ShowMenu')
    }
    const ShowSideBar = () => {
        document.querySelector('.Sidebar').classList.add('ShowMenu');
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
    return (
        <div className="mainSidebar">
            <FontAwesomeIcon onClick={ShowSideBar} className="MenuBar" icon={faBars}></FontAwesomeIcon>
            <div className="col-md-2 Sidebar">
                <a onClick={CloseSideBar} className="closeSideBar" href="">x</a>
                <ul className="pt-5" >
                    {
                        user.status == 'doctor' && <li><FontAwesomeIcon style={{ color: 'white' }} icon={faChessBoard} /><Link to="/dashboard">Dashboard</Link></li>
                    }
                    <li><FontAwesomeIcon style={{ color: 'white' }} icon={faCalendar} /><Link to="/dashboardAppointment" >Appointment</Link></li>
                    {
                        user.status == 'doctor' && <div>
                            <li><FontAwesomeIcon style={{ color: 'white' }} icon={faFileMedicalAlt} /><Link to="/AllPatients">Patients</Link></li>
                            <li><FontAwesomeIcon style={{ color: 'white' }} icon={faUsers} /><Link to="/AddDoctors">Add Doctors</Link></li>
                        </div>
                    }
                    
                    <li><FontAwesomeIcon style={{ color: 'white' }} icon={faBackward} /><Link to="/">Go To Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;