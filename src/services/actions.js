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
    console.log("hi")
        const sessionLengthIndexValue = store.getState().sessionLengthIndex
        for(let i = sessionLengthIndexValue; i > 1; i--) {
            setTimeout( (() => { 
            const sessionMinutesValue = store.getState().timingArray[i + 1];
            dispatch(updateMinutes(sessionMinutesValue));
        }),1000)
    }
}
//use set interval, don't use for loops
//const sessionSecondsIndexValue = store.getState().timingArrayIndex;
        // setTimeout(function() {
        //     for(let j = sessionSecondsIndexValue; j > 1; j-- ) {
        //             const countDownSeconds = ((dispatch) => {
        //             const sessionSecondsValue = store.getState().timingArray[j];
        //             dispatch(updateSeconds(sessionSecondsValue));
        //             });
        //             countDownSeconds(dispatch);
        //         console.log('hi')
        //     }
        // }, 1000);
export const countDown = () => {
    return(dispatch) => {
        // if(store.getState().play) {
        //     runTiming(dispatch);
        // }
        runTiming(dispatch);
    }
}

