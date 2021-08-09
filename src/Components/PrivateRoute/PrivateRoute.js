import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const getSess = sessionStorage.getItem('user');
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    getSess ? (
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
        </div>
    );
};

export default PrivateRoute;