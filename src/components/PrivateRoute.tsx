import React, { Children } from 'react'
import { Route, RouterProps } from 'react-router-dom';
import { Login } from '../pages/Account/Login';

export const PrivateRoute = ({ children, ...rest }: RouterProps): JSX.Element => {
    return (
        <Route {...rest} element={false ? children : <Login />}></Route>
    );
};
