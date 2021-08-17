import React from 'react';
import { Redirect, Route } from 'react-router';

const DoctorRoute = ({ children, ...rest }) => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.status == 'doctor' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboardAppointment",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default DoctorRoute;