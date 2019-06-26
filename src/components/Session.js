import React from 'react';
import { store } from '../index.js';
import Pacman from '../services/Pacman.mp3';

const Session = ({minutes, seconds}) => {
    return(
        <div className="w-40 w-30-ns w-30-m w-20-l flex flex-column items-center justify-cener ba br3 mt2 bg-lightest-blue"
            id="timer-label"
        >
            {
                store.getState().session === true ?
                <h2>Session</h2>
                :
                <h2>Break</h2>
            }
            <div id="time-left" className="pb2 f4">{minutes}:{seconds}</div>
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