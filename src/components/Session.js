import React from 'react';
import { store } from '../index.js';

const Session = ({minutes, seconds}) => {
    return(
        <div className="flex flex-column ba"
            id="timer-label"
        >
            {
                store.getState().session === true ?
                <h2>Session</h2>
                :
                <h2>Break</h2>
            }
            <div id="time-left">{minutes}:{seconds}</div>
        </div>
    );
}
export default Session;