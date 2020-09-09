import React from 'react';
import './AuthorizationPage.scss';
import bearFace from '../../images/bear-face/bear-face.png';

const AuthorizationPage = () => {
    return (
        <div>
            <div className="login-form-wrapper">
                <img src={bearFace} className="login-form-wrapper__img" />
                <button className="login-form-wrapper__btn">
                    Let me in
                </button>
            </div>
        </div>
    );
};

export default AuthorizationPage;
