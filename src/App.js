import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import CheckCode from './Components/CheckCode/CheckCode';
import Connect from './Components/Connect/Connect';
import AddDoctors from './Components/Deshboard/AddDoctors/AddDoctors';
import AllPatients from './Components/Deshboard/AllPatients/AllPatients';
import AppointmentByDate from './Components/Deshboard/AppointmentByDate/AppointmentByDate';
import ControlAppointment from './Components/Deshboard/ControlAppointment/ControlAppointment';
import DoctorRoute from './Components/DoctorRoute/DoctorRoute';
import Doctors from './Components/Doctors/Doctors';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import GetAppointment from './Components/GetAppointment/GetAppointment';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Privateroute from './Components/PrivateRoute/Privateroute';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Testimonial from './Components/Testimonial/Testimonial';


const App = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  return (
      <Router>
        <Switch>
          <Privateroute path="/appointment">
            <GetAppointment></GetAppointment>
          </Privateroute>
          <Route path="/login">
            <Login></Login>
          </Route>
          {
            user ?
              <DoctorRoute path="/dashboard" >
                <ControlAppointment></ControlAppointment>
              </DoctorRoute>
              :
              <Privateroute path="/dashboard" >
                <ControlAppointment></ControlAppointment>
              </Privateroute>
          }
          <Privateroute path="/dashboardAppointment" >
            <AppointmentByDate></AppointmentByDate>
          </Privateroute>
          {
            user ?
              <DoctorRoute path="/AllPatients" >
                <AllPatients></AllPatients>
              </DoctorRoute>
              :
              <Privateroute path="/AllPatients" >
                <ControlAppointment></ControlAppointment>
              </Privateroute>
          }
          {
            user ?
              <DoctorRoute path="/AddDoctors">
                <AddDoctors></AddDoctors>
              </DoctorRoute>
              :
              <Privateroute path="/AddDoctors" >
                <AddDoctors></AddDoctors>
              </Privateroute>
          }
          <Route path="/Forget" >
            <ForgetPassword></ForgetPassword>
          </Route>
          <Route path="/checkCode" >
            <CheckCode></CheckCode>
          </Route>
          <Route path="/changePassword" >
            <ChangePassword></ChangePassword>
          </Route>
          
          
          <Route path="/">
            <Header></Header>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Connect></Connect>
          </Route>
        </Switch>
      </Router>
  );
};

export default App;