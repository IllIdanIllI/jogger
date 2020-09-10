import React from 'react';
import './EmptyJogsPage.scss';
import { ReactComponent as SadEmoji } from '../../images/emptyPage/empty-page-emoji.svg';

const EmptyJogsPage = () => {
    return (
        <div className="empty-jogs-container">
            <div className="empty-jogs-container__notification">
                <SadEmoji className="empty-jogs-container__notification-emoji" />
                <span className="empty-jogs-container__notification-text">
                    Nothing is there
                </span>
            </div>
            <button className="empty-jogs-container__creation">
                <span>Create your first jog</span>
            </button>
        </div>
    );
};

export default EmptyJogsPage;
