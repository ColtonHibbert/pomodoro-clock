import {
    DEFAULT,
    UPDATE_NUM,
    INCREASE_BREAK_LENGTH,
    INCREASE_BREAK_LENGTH_INDEX,
    DECREASE_BREAK_LENGTH_INDEX,
    DECREASE_BREAK_LENGTH,
    INCREASE_SESSION_LENGTH_INDEX,
    INCREASE_SESSION_LENGTH,
    DECREASE_SESSION_LENGTH_INDEX,
    DECREASE_SESSION_LENGTH,
    UPDATE_MINUTES,
    UPDATE_SECONDS,
    TOGGLE_PLAY,
    DECREASE_SESSION_MINUTES_ARRAY_INDEX,
    DECREASE_SESSION_SECONDS_ARRAY_INDEX,
    DECREASE_BREAK_MINUTES_ARRAY_INDEX,
    DECREASE_BREAK_SECONDS_ARRAY_INDEX,
    UPDATE_SESSION_MINUTES_ARRAY_INDEX,
    UPDATE_SESSION_SECONDS_ARRAY_INDEX,
    UPDATE_BREAK_MINUTES_ARRAY_INDEX,
    UPDATE_BREAK_SECONDS_ARRAY_INDEX,
} from './constants.js';
import { store } from '../index.js';

export const updateNum = () => {
    return ({
        type: UPDATE_NUM,
        updateNumPayload: 1,
    });
}

export const increaseBreakLengthIndex = () => {
    return({
        type: INCREASE_BREAK_LENGTH_INDEX,
        breakLengthIndexPayload: (() => {
             const newIndex = store.getState().breakLengthIndex + 1;
             return newIndex;
        })(),
    });
}

export const increaseBreakLength = () => {
    return({
        type: INCREASE_BREAK_LENGTH,
        breakLengthPayload: (() => {
            const newBreakLength = store.getState().normalArray[store.getState().breakLengthIndex];
            return newBreakLength;
        })(),
    });
}

export const updateIncreasedBreakLength = () => {
    return (dispatch) => {
        if(store.getState().breakLength < 60) {
        dispatch(increaseBreakLengthIndex());
        dispatch(increaseBreakLength());
        }
    }
}

export const decreaseBreakLengthIndex = () => {
    return({
        type: DECREASE_BREAK_LENGTH_INDEX,
        breakLengthIndexPayload: store.getState().breakLengthIndex - 1,
    });
}

export const decreaseBreakLength = () => {
    return({
        type: DECREASE_BREAK_LENGTH,
        breakLengthPayload: store.getState().normalArray[store.getState().breakLengthIndex],
    });
}

export const updateDecreasedBreakLength = () => {
    return (dispatch) => {
        if(store.getState().breakLength > 1) {
            dispatch(decreaseBreakLengthIndex());
            dispatch(decreaseBreakLength());
        }
    }
}

export const increaseSessionLengthIndex = () => {
    return({
        type: INCREASE_SESSION_LENGTH_INDEX,
        sessionLengthIndexPayload: (() => {
             const newIndex = store.getState().sessionLengthIndex + 1;
             return newIndex;
        })(),
    });
}

export const increaseSessionLength = () => {
    return({
        type: INCREASE_SESSION_LENGTH,
        sessionLengthPayload: (() => {
            const newSessionLength = store.getState().normalArray[store.getState().sessionLengthIndex];
            return newSessionLength;
        })(),
    });
}

export const updateIncreasedSessionLength = () => {
    return (dispatch) => {
        if(store.getState().sessionLength < 60) {
        dispatch(increaseSessionLengthIndex());
        dispatch(increaseSessionLength());
        }
    }
}

export const decreaseSessionLengthIndex = () => {
    return({
        type: DECREASE_SESSION_LENGTH_INDEX,
        sessionLengthIndexPayload: store.getState().sessionLengthIndex - 1,
    });
}

export const decreaseSessionLength = () => {
    return({
        type: DECREASE_SESSION_LENGTH,
        sessionLengthPayload: store.getState().normalArray[store.getState().sessionLengthIndex],
    });
}

export const updateDecreasedSessionLength = () => {
    return (dispatch) => {
        if(store.getState().sessionLength > 1) {
            dispatch(decreaseSessionLengthIndex());
            dispatch(decreaseSessionLength());
        }
    }
}

export const updateMinutes = (value) => {
    return({
        type: UPDATE_MINUTES,
        updateMinutesPayload: value,
    });
}

export const updateSeconds = (value) => {
    return({
        type: UPDATE_SECONDS,
        updateSecondsPayload: value,
    });
}

function runTiming(dispatch) {
    let interval = window.setInterval(countingDown, 1000);
    function countingDown() {
        let minutesVal = store.getState().minutesArray[store.getState().sessionMinutesArrayIndex];
        if(store.getState().play) {
            if(store.getState().sessionMinutesArrayIndex === 0 && store.getState().sessionSecondsArrayIndex === 0) {
                dispatch(updateSessionMinutesArrayIndex(4))
                dispatch(updateSessionSecondsArrayIndex(60))
            }
            if (store.getState().sessionSecondsArrayIndex === 0) {
                dispatch(updateSessionSecondsArrayIndex(60))
            }
            if (store.getState().sessionSecondsArrayIndex === 59) {
                dispatch(decreaseSessionMinutesArrayIndex())
                dispatch(updateMinutes(minutesVal));
            }
            dispatch(decreaseSessionSecondsArrayIndex());
            let secondsVal = store.getState().secondsArray[store.getState().sessionSecondsArrayIndex];
            dispatch(updateSeconds(store.getState().secondsArray[store.getState().sessionSecondsArrayIndex]));
        } else {
            clearInterval(interval);
        }
    }
}
// function runTiming(dispatch) {
//     let sessionMinutesIndexValue = store.getState().sessionMinutesArrayIndex;
//     let sessionSecondsIndexValue = store.getState().sessionSecondsArrayIndex;
//     let interval = window.setInterval(countingDown, 1000);
//     function countingDown() {
//         if(store.getState().play) {
//             let sessionMinutesVal = store.getState().minutesArray[sessionMinutesIndexValue];
//             if(sessionMinutesIndexValue === 0 && sessionSecondsIndexValue === 0) {
//                 sessionMinutesIndexValue = 4;
//                 sessionSecondsIndexValue = 60;
//             }
//             if (sessionSecondsIndexValue === 0) {
//                 sessionSecondsIndexValue = 60;
//             }
//             if (sessionSecondsIndexValue === 59) {
//                 sessionMinutesIndexValue = sessionMinutesIndexValue - 1;
//                 dispatch(updateMinutes(sessionMinutesVal));
//             }
//             sessionSecondsIndexValue = sessionSecondsIndexValue - 1
//             let sessionSecondsVal = store.getState().secondsArray[sessionSecondsIndexValue];
//             dispatch(updateSeconds(sessionSecondsVal));
//         } else {
//             clearInterval(interval);
//         }
//     }
// }

export const countDown = () => {
    return(dispatch) => {
        runTiming(dispatch);
    }
}

export const togglePlay = () => {
    return {
        type: TOGGLE_PLAY,
        playPayload: !store.getState().play
    }
}

export const decreaseSessionMinutesArrayIndex = () => {
    return {
        type: DECREASE_SESSION_MINUTES_ARRAY_INDEX,
        sessionMinutesArrayIndexPayload: store.getState().sessionMinutesArrayIndex - 1,
    }
}

export const decreaseSessionSecondsArrayIndex = () => {
    return {
        type: DECREASE_SESSION_SECONDS_ARRAY_INDEX,
        sessionSecondsArrayIndexPayload: store.getState().sessionSecondsArrayIndex - 1,
    }
}

export const decreaseBreakMinutesArrayIndex = () => {
    return {
        type: DECREASE_BREAK_MINUTES_ARRAY_INDEX,
        breakMinutesArrayIndexPayload: store.getState().breakMinutesArrayIndex - 1,
    }
}

export const decreaseBreakSecondsArrayIndex = () => {
    return {
        type: DECREASE_BREAK_SECONDS_ARRAY_INDEX, 
        breakSecondsArrayIndexPayload: store.getState().breakSecondsArrayIndex - 1,
    }
}

export const updateSessionMinutesArrayIndex = (value) => {
    return {
        type: UPDATE_SESSION_MINUTES_ARRAY_INDEX,
        sessionMinutesArrayIndexPayload: value,
    }
}

export const updateSessionSecondsArrayIndex = (value) => {
    return {
        type: UPDATE_SESSION_SECONDS_ARRAY_INDEX,
        sessionSecondsArrayIndexPayload: value,
    }
}

export const updateBreakMinutesArrayIndex = (value) => {
    return {
        type: UPDATE_BREAK_MINUTES_ARRAY_INDEX,
        breakMinutesArrayIndexPayload: value,
    }
}

export const updateBreakSecondsArrayIndex = (value) => {
    return {
        type: UPDATE_BREAK_SECONDS_ARRAY_INDEX,
        breakSecondsArrayIndexPayload: value,
    }
}