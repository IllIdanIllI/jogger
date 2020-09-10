import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './JogsPage.scss';
import { receiveJogs } from '../../actions/jogsActions';
import { useActions } from '../../custom/customHooks';
import EmptyJogsPage from '../../components/EmptyJogsPage';
import JogInstance from '../../components/JogInstance';

const JogsPage = () => {
    const [onReceiveJogs] = useActions([receiveJogs]);

    const jogs = useSelector((state) => state.jogStore.jogs);

    useEffect(() => onReceiveJogs(), []);
    console.log(jogs);
    // if (jogs) return <EmptyJogsPage />;
    return (
        <div className="jogs-container">
            {jogs.map((jog) => (
                <JogInstance key={jog.id} jog={jog} />
            ))}
        </div>
    );
};

export default JogsPage;
