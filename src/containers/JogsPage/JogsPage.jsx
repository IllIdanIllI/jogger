import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './JogsPage';
import { receiveJogs } from '../../actions/jogsActions';
import { useActions } from '../../custom/customHooks';
import EmptyJogsPage from '../../components/EmptyJogsPage';

const JogsPage = () => {
    const [onReceiveJogs] = useActions([receiveJogs]);

    const jogs = useSelector((state) => state.jogStore.jogs);

    useEffect(() => onReceiveJogs(), []);
    console.log(jogs);
    if (jogs) return <EmptyJogsPage />;
    return <div className="jogs-container">Jogs</div>;
};

export default JogsPage;
