import React from 'react';
import { store } from '../index.js';
import Pacman from '../services/Pacman.mp3';

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
            <audio
                id="beep"
                src={Pacman}
                type="audio/mp3"
            >Your browser does not support this audio format.
            </audio>
        </div>
    );
}
export default Session;