import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './JogsPage.scss';
import { receiveJogs } from '../../actions/jogsActions';
import { useActions } from '../../custom/customHooks';
import EmptyJogsPage from '../../components/EmptyJogsPage';
import JogInstance from '../../components/JogInstance';
import { ReactComponent as Plus } from '../../images/plus/addItem.svg';
import { JOGS_URL, ADD_URL } from '../../constants/constants';

const JogsPage = () => {
    const [onReceiveJogs] = useActions([receiveJogs]);

    const jogs = useSelector((state) => state.jogStore.jogs);

    useEffect(() => onReceiveJogs(), []);
    console.log(jogs);
    if (Array.isArray(jogs) && jogs.length === 0) return <EmptyJogsPage />;
    return (
        <div className="jogs-container">
            <Link to={JOGS_URL + ADD_URL}>
                <Plus className="jogs-container__add-btn" />
            </Link>

            {jogs.map((jog) => (
                <JogInstance key={jog.id} jog={jog} />
            ))}
        </div>
    );
};

export default JogsPage;
