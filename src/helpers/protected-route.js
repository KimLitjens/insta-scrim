import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

export default function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                console.log("🚀 ~ file: protected-route.js ~ line 10 ~ ProtectedRoute ~ location", location)
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.LOGIN,
                                state: { from: location }
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}