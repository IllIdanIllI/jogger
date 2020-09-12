import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './AuthorizationPage.scss';
import { ReactComponent as BearFace } from '../../images/bear-face/bear-face.svg';
import { useActions } from '../../custom/customHooks';
import {
    authenticate,
    reAuthenticate,
} from '../../actions/authenticationActions';
import { TOKEN } from '../../constants/constants';
import { ReactComponent as Loader } from '../../images/loader/loader.svg';

const AuthorizationPage = ({ isAuthenticate }) => {
    const [onAuthenticate, onReAuthenticate] = useActions([
        authenticate,
        reAuthenticate,
    ]);

    const isAuthenticated = useSelector(
        (state) => state.authentication.isAuthenticated
    );

    const isLoading = useSelector((state) => state.authentication.isLoading);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN);

        if (token && !isAuthenticate) {
            onReAuthenticate(token);
        }
    }, [isAuthenticated]);

    if (isAuthenticated) return <Redirect to="/jogs" />;

    if (isLoading && isAuthenticated) return <Loader />;

    return (
        <div>
            <div className="login-form-wrapper">
                <BearFace className="login-form-wrapper__img" />
                <button
                    onClick={() => onAuthenticate()}
                    className="login-form-wrapper__btn"
                >
                    Let me in
                </button>
            </div>
        </div>
    );
};

export default AuthorizationPage;
