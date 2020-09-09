import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './AuthorizationPage.scss';
import bearFace from '../../images/bear-face/bear-face.png';
import { useActions } from '../../custom/customHooks';
import { authenticate } from '../../actions/authenticationActions';
import { TOKEN } from '../../constants/constants';

const AuthorizationPage = ({ isAuthenticate }) => {
    const [onAuthenticate] = useActions([authenticate]);

    const isAuthenticated = useSelector(
        (state) => state.authentication.isAuthenticated
    );

    useEffect(() => {
        const token = localStorage.getItem(TOKEN);

        if (token && !isAuthenticate) {
            onAuthenticate();
        }
    }, [isAuthenticated]);

    if (isAuthenticated) return <Redirect to="/jogs" />;

    return (
        <div>
            <div className="login-form-wrapper">
                <img src={bearFace} className="login-form-wrapper__img" />
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
