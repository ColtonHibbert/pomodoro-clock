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

// export const countDown = () => {
//     return(dispatch) => {
//         if(play) {
//             for(let i = 1; store.getState().counter )
//         }
//     }
// }

