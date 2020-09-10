import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './AddJogsPage.scss';
import { ReactComponent as Cross } from '../../images/cancel/cancel.svg';
import { JOGS_URL, ADD_URL } from '../../constants/constants';
import { useActions } from '../../custom/customHooks';
import { addJog, updateJog } from '../../actions/jogsActions';
import {
    dateToInput,
    dateFromTimestampToInput,
} from '../../service/dataService';

const AddJogsPage = () => {
    const location = useLocation();
    const history = useHistory();

    const jogs = useSelector((state) => state.jogStore.jogs);

    const isUpdate = useMemo(
        () => (location.pathname === JOGS_URL + ADD_URL ? false : true),
        [location.pathname]
    );
    const defineDate = useMemo(() => dateToInput(), []);
    const formData = useMemo(() => {
        const paths = location.pathname.split('/');
        if (Array.isArray(jogs) && jogs.length > 0) {
            const jog = jogs.find((jog) => paths[paths.length - 1] == jog.id);
            if (jog) {
                jog.date = dateFromTimestampToInput(jog.date);
                return jog;
            } else {
                return {};
            }
        } else {
            return {};
        }
    }, [jogs]);

    const [onAddJogs, onUpdateJog] = useActions([addJog, updateJog]);

    const [distance, setDistance] = useState(isUpdate ? formData.distance : 0);
    const [time, setTime] = useState(isUpdate ? formData.time : 0);
    const [date, setDate] = useState(isUpdate ? formData.date : defineDate);

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

export default AddJogsPage;
