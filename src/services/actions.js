import {
    DEFAULT,
    UPDATE_NUM,
    INCREASE_BREAK_LENGTH,
    INCREASE_BREAK_LENGTH_INDEX,
} from './constants.js';
import { store } from '../index.js';

export const updateNum = () => {
    return ({
        type: UPDATE_NUM,
        updateNumPayload: 1,
    })
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
    })
}

export const updateIncreasedBreakLength = () => {
    return (dispatch) => {
        if(store.getState().breakLength < 60) {
        dispatch(increaseBreakLengthIndex());
        dispatch(increaseBreakLength());
        }
    }
}
