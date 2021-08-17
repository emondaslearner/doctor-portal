import React from 'react';
import { Redirect, Route } from 'react-router';

const Privateroute = ({ children, ...rest }) => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default Privateroute;