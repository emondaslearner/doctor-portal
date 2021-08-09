import logo from './logo.svg';
import './App.css';
import Section from './Components/Section/Section';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import AllAppointments from './Components/AllAppointments/AllAppointments';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Desbord from './Components/Desboard/Desbord';

function App() {
  return (
    <Router>
      <div className="doctorPortal">
        <Switch>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/AllAppointment">
            <AllAppointments></AllAppointments>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
          </Route> 
          <Route path="/desboard">
            <Desbord></Desbord>
          </Route> 
          <Route path="/" >
            <Section></Section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
