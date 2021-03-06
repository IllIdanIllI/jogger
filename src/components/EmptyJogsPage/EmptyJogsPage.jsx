import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyJogsPage.scss';
import { ReactComponent as SadEmoji } from '../../images/emptyPage/empty-page-emoji.svg';
import { JOGS_URL, ADD_URL } from '../../constants/constants';

const EmptyJogsPage = () => {
    return (
        <div className="empty-jogs-container">
            <div className="empty-jogs-container__notification">
                <SadEmoji className="empty-jogs-container__notification-emoji" />
                <span className="empty-jogs-container__notification-text">
                    Nothing is there
                </span>
            </div>
            <Link to={JOGS_URL + ADD_URL}>
                <button className="empty-jogs-container__creation">
                    <span>Create your first jog</span>
                </button>
            </Link>
        </div>
    );
};

export default EmptyJogsPage;
