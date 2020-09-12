import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import './AddJogsPage.scss';
import { ReactComponent as Cross } from '../../images/cancel/cancel.svg';
import { JOGS_URL, ADD_URL } from '../../constants/constants';
import { useActions } from '../../custom/customHooks';
import { addJog, updateJog, receiveJogs } from '../../actions/jogsActions';
import {
    dateToInput,
    dateFromTimestampToInput,
} from '../../service/dataService';
import { ReactComponent as Loader } from '../../images/loader/loader.svg';

const AddJogsPage = ({ match }) => {
    const history = useHistory();

    const jogs = useSelector((state) => state.jogStore.jogs);

    const isUpdate = useMemo(
        () => (match.url === JOGS_URL + ADD_URL ? false : true),
        [match.url]
    );
    const defineDate = useMemo(() => dateToInput(), []);

    useEffect(() => {
        onReceive();
    }, []);

    const [date, setDate] = useState(defineDate);
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);

    const formData = useMemo(() => {
        if (Array.isArray(jogs) && jogs.length > 0 && isUpdate) {
            const jog = jogs.find((jog) => match.params.id == jog.id);
            if (jog) {
                jog.date = dateFromTimestampToInput(jog.date);
                setDistance(jog.distance);
                setTime(jog.time);
                setDate(jog.date);
                return jog;
            } else {
                return {};
            }
        } else {
            return {};
        }
    }, [jogs]);

    const [onAddJogs, onUpdateJog, onReceive] = useActions([
        addJog,
        updateJog,
        receiveJogs,
    ]);

    const updateJogHandler = () => {
        const newJog = {
            date,
            time,
            distance,
            jog_id: formData.id,
            user_id: formData.user_id,
        };
        onUpdateJog(newJog);
        setTimeout(() => history.push(JOGS_URL));
    };

    const addJogHandler = () => {
        onAddJogs({ distance, time, date });
        setTimeout(() => history.push(JOGS_URL));
    };

    return (
        <div className="add-jogs-container">
            <div className="add-jogs-container__window">
                <Link to={JOGS_URL}>
                    <Cross className="add-jogs-container__window-cross" />
                </Link>

                <div className="add-jogs-container__window-form">
                    <div className="add-jogs-container__window-form__inputs">
                        <label htmlFor="Distance">Distance</label>
                        <input
                            type="number"
                            onChange={(e) => setDistance(e.target.value)}
                            value={distance}
                            id="Distance"
                        />
                        <label htmlFor="Time">Time</label>
                        <input
                            type="number"
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                            id="Time"
                        />
                        <label htmlFor="Date">Date</label>
                        <input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            id="Date"
                        />
                    </div>
                    {isUpdate ? (
                        <button
                            onClick={() => updateJogHandler()}
                            className="add-jogs-container__window-form__button"
                        >
                            <span>Update</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => addJogHandler()}
                            className="add-jogs-container__window-form__button"
                        >
                            <span>Save</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

AddJogsPage.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        isExact: PropTypes.bool.isRequired,
        params: PropTypes.object.isRequired,
    }).isRequired,
};

export default AddJogsPage;
