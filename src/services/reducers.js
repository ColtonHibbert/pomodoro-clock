import {
    DEFAULT,
    UPDATE_NUM,
    INCREASE_BREAK_LENGTH_INDEX,
    INCREASE_BREAK_LENGTH,

} from './constants.js';

const initialState = {
    number: 0,
    normalArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    timingArray: ['00','01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    breakLength: "5",
    breakLengthIndex: 4, 
    sessionLength: "25",
    sessionLengthIndex: 24,
    sessionMinutes: 25,
    sessionSeconds: "00",
}

export const reducer = ( state=initialState, action={} ) => {
    if(action.type === UPDATE_NUM) {
        return {...state, number: action.updateNumPayload }
    }
    if(action.type === INCREASE_BREAK_LENGTH_INDEX) {
        return {...state, breakLengthIndex: action.breakLengthIndexPayload }
    }
    if(action.type === INCREASE_BREAK_LENGTH) {
        return {...state, breakLength: action.breakLengthPayload }
    }
    if(action.type === DEFAULT ) {
        return {...state }
    }
    return state;
}