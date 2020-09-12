import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './JogsPage.scss';
import { receiveJogs, setJogs } from '../../actions/jogsActions';
import { useActions } from '../../custom/customHooks';
import EmptyJogsPage from '../../components/EmptyJogsPage';
import JogInstance from '../../components/JogInstance';
import { ReactComponent as Plus } from '../../images/plus/addItem.svg';
import { JOGS_URL, ADD_URL } from '../../constants/constants';
import { dateToInput } from '../../service/dataService';
import { ReactComponent as Loader } from '../../images/loader/loader.svg';

const JogsPage = () => {
    const [onReceiveJogs, onSetJogs] = useActions([receiveJogs, setJogs], []);

    const jogs = useSelector((state) => state.jogStore.jogs);
    const isLoading = useSelector((state) => state.jogStore.isLoading);
    const isFilterActive = useSelector(
        (state) => state.jogStore.isFilterActive
    );

    const [dateFrom, setDateFrom] = useState(
        dateToInput(new Date('2020-01-10'))
    );
    const [dateTo, setDateTo] = useState(dateToInput());

    useEffect(() => {
        onReceiveJogs();
    }, []);

    useEffect(() => {
        isFilterActive ? onSetJogs(dateTo, dateFrom) : onReceiveJogs();
    }, [isFilterActive, dateFrom, dateTo]);

    if (isLoading) {
        return <Loader />;
    } else if (Array.isArray(jogs) && jogs.length === 0) {
        return <EmptyJogsPage />;
    }
    return (
        <>
            {isFilterActive && (
                <div className="filter">
                    <div className="filter-container">
                        <div className="filter-container__date">
                            <span>Date from</span>
                            <input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                            />
                        </div>
                        <div className="filter-container__date">
                            <span>Date to</span>
                            <input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="jogs-container">
                <Link to={JOGS_URL + ADD_URL}>
                    <Plus className="jogs-container__add-btn" />
                </Link>

                {jogs.map((jog) => (
                    <JogInstance key={jog.id} jog={jog} />
                ))}
            </div>
        </>
    );
};

export default JogsPage;
