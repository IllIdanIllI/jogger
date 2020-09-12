import React from 'react';
import './ContactPage.scss';
import {ReactComponent as Loader} from '../../images/loader/loader.svg';

const ContactPage = () => {
    return (
        <div className="contact-container">
            <Loader />
            For mo information call: 102
        </div>
    );
};

export default ContactPage;
