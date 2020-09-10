import React from 'react';
import PropTypes from 'prop-types';
import './JogInstance.scss';
import { ReactComponent as Icon } from '../../images/jogIcon/jogIcon.svg';
import { dateFromTimestamp } from '../../service/dataService';

const speed = 15;

const JogInstance = ({ jog }) => {
    const date = dateFromTimestamp(jog.date);

    return (
        <div className="jog-instance-container">
            <Icon className="jog-instance-container__icon" />
            <span className="jog-instance-container__description">
                <span className="jog-instance-container__description__date">
                    {date}
                </span>
                <div className="jog-instance-container__description__parameters">
                    <span className="jog-instance-container__description__parameters-name">
                        Speed:{'  '}
                    </span>

                    <span className="jog-instance-container__description__parameters-value">
                        {speed}
                    </span>
                </div>
                <div className="jog-instance-container__description__parameters">
                    <span className="jog-instance-container__description__parameters-name">
                        Distance:{'  '}
                    </span>

                    <span className="jog-instance-container__description__parameters-value">
                        {jog.distance} km
                    </span>
                </div>
                <div className="jog-instance-container__description__parameters">
                    <span className="jog-instance-container__description__parameters-name">
                        Time:{'  '}
                    </span>
                    <span className="jog-instance-container__description__parameters-value">
                        {jog.time} min
                    </span>
                </div>
            </span>
        </div>
    );
};
JogInstance.propTypes = {
    jog: PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.number.isRequired,
        distance: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        user_id: PropTypes.string.isRequired,
    }).isRequired,
};
export default JogInstance;
