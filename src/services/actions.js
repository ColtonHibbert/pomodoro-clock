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
    ALTERNATE_SESSION_AND_BREAK,
    REFRESH,
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
        if(store.getState().breakLength < 60 && store.getState().play === false) {
            dispatch(increaseBreakLengthIndex());
            dispatch(increaseBreakLength());
            if(store.getState().session === false) {
                if(store.getState().sessionSecondsArrayIndex < 59) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionMinutesArrayIndex + 2));
                }
                if(store.getState().sessionSecondsArrayIndex === 59) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionMinutesArrayIndex + 1));
                }
                dispatch(updateSessionSecondsArrayIndex(59))
            }
            if(store.getState().session === false ) {
                dispatch(updateMinutes(store.getState().minutesArray[store.getState().breakLengthIndex + 1]))
                dispatch(updateSeconds(store.getState().secondsArray[59]))
            }
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
        if(store.getState().breakLength > 1 && store.getState().play === false) {
            dispatch(decreaseBreakLengthIndex());
            dispatch(decreaseBreakLength());
            if(store.getState().session === false) {
                if(store.getState().sessionSecondsArrayIndex === 59) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionMinutesArrayIndex - 1));
                }
                dispatch(updateSessionSecondsArrayIndex(59))
            }
            if(store.getState().session === false ) {
                dispatch(updateMinutes(store.getState().minutesArray[store.getState().breakLengthIndex + 1]))
                dispatch(updateSeconds(store.getState().secondsArray[59]))
            }
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
        if(store.getState().sessionLength < 60 && store.getState().play === false) {
            dispatch(increaseSessionLengthIndex());
            dispatch(increaseSessionLength());
            if(store.getState().session) {
                if(store.getState().sessionSecondsArrayIndex < 59) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionMinutesArrayIndex + 2));
                }
                if(store.getState().sessionSecondsArrayIndex === 59) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionMinutesArrayIndex + 1));
                }
                dispatch(updateSessionSecondsArrayIndex(59))
            }
            if(store.getState().session) {
                dispatch(updateMinutes(store.getState().minutesArray[store.getState().sessionMinutesArrayIndex]))
                dispatch(updateSeconds(store.getState().secondsArray[store.getState().sessionSecondsArrayIndex]))
            }
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
        if(store.getState().sessionLength > 1 && store.getState().play === false) {
            dispatch(decreaseSessionLengthIndex());
            dispatch(decreaseSessionLength());
            if(store.getState().session) {
                if(store.getState().sessionSecondsArrayIndex === 59) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionMinutesArrayIndex - 1));
                }
                dispatch(updateSessionSecondsArrayIndex(59))
            }
            if(store.getState().session) {
                dispatch(updateMinutes(store.getState().minutesArray[store.getState().sessionMinutesArrayIndex]))
                dispatch(updateSeconds(store.getState().secondsArray[store.getState().sessionSecondsArrayIndex]))
            }
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
        if(store.getState().play) {
            if(store.getState().sessionMinutesArrayIndex === 0 && store.getState().sessionSecondsArrayIndex === 0) {
                if(store.getState().session === false) {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().breakLengthIndex + 1))
                    dispatch(updateSessionSecondsArrayIndex(60))
                    dispatch(alternateSessionAndBreak())
                }
                else {
                    dispatch(updateSessionMinutesArrayIndex(store.getState().sessionLengthIndex + 1))
                    dispatch(updateSessionSecondsArrayIndex(60))
                    dispatch(alternateSessionAndBreak())
                 }
            }
            if (store.getState().sessionSecondsArrayIndex === 0) {
                dispatch(updateSessionSecondsArrayIndex(60))
            }
            if (store.getState().sessionSecondsArrayIndex === 59) {
                dispatch(decreaseSessionMinutesArrayIndex())
                dispatch(updateMinutes(store.getState().minutesArray[store.getState().sessionMinutesArrayIndex]));
            }
            dispatch(decreaseSessionSecondsArrayIndex());
            dispatch(updateSeconds(store.getState().secondsArray[store.getState().sessionSecondsArrayIndex]));
            
        } else if(store.getState().play === false) {
            clearInterval(interval);
        }
    }
}

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

export const alternateSessionAndBreak = () => {
    return {
        type: ALTERNATE_SESSION_AND_BREAK,
        alternateSessionAndBreakPayload: !store.getState().session,
    }
}

export const refresh = () => {
    return {
        type: REFRESH,
        sessionMinutesArrayIndexPayload: 25,
        sessionSecondsArrayIndexPayload: 59,
        breakLengthPayload: "5",
        breakLengthIndexPayload: 4,
        sessionLengthPayload: "25",
        sessionLengthIndexPayload: 24,
        minutesPayload: "25",
        secondsPayload: "00",
        playPayload: false,
        sessionPayload: true,
    }
}