import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../../custom/customHooks';
import { logOut } from '../../actions/authenticationActions';
import { TOKEN } from '../../constants/constants';

export const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticate = useSelector(
        (state) => state.authentication.isAuthenticated
    );
    const [onLogOut] = useActions([logOut]);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN);

        if (!token && isAuthenticate) {
            onLogOut();
        }
    });

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticate ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
