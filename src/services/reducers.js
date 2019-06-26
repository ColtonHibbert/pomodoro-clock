import {
    DEFAULT,
    UPDATE_NUM,
    INCREASE_BREAK_LENGTH_INDEX,
    INCREASE_BREAK_LENGTH,
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
import { alternateSessionAndBreak } from './actions.js';

const initialState = {
    number: 0,
    normalArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    secondsArray: ['01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,'00'],
    minutesArray: ['00','01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
    sessionMinutesArrayIndex: 25,
    sessionSecondsArrayIndex: 59,
    breakLength: "5",
    breakLengthIndex: 4,
    sessionLength: "25",
    sessionLengthIndex: 24,
    minutes: "25",
    seconds: "00",
    play: false,
    session: true,
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
    if(action.type === DECREASE_BREAK_LENGTH_INDEX) {
        return {...state, breakLengthIndex: action.breakLengthIndexPayload }
    }
    if(action.type === DECREASE_BREAK_LENGTH) {
        return {...state, breakLength: action.breakLengthPayload }
    }
    if(action.type === INCREASE_SESSION_LENGTH_INDEX ) {
        return { ...state, sessionLengthIndex: action.sessionLengthIndexPayload }
    }
    if(action.type === INCREASE_SESSION_LENGTH ) {
        return { ...state, sessionLength: action.sessionLengthPayload }
    }
    if(action.type === DECREASE_SESSION_LENGTH_INDEX) {
        return {...state, sessionLengthIndex: action.sessionLengthIndexPayload }
    }
    if(action.type === DECREASE_SESSION_LENGTH) {
        return {...state, sessionLength: action.sessionLengthPayload }
    }
    if(action.type === UPDATE_MINUTES) {
        return {...state, minutes: action.updateMinutesPayload }
    }
    if(action.type === UPDATE_SECONDS) {
        return {...state, seconds: action.updateSecondsPayload }
    }
    if(action.type === TOGGLE_PLAY) {
        return {...state, play: action.playPayload}
    }
    if(action.type === DECREASE_SESSION_MINUTES_ARRAY_INDEX ) {
        return {...state, sessionMinutesArrayIndex: action.sessionMinutesArrayIndexPayload }
    }
    if(action.type === DECREASE_SESSION_SECONDS_ARRAY_INDEX ) {
        return {...state, sessionSecondsArrayIndex: action.sessionSecondsArrayIndexPayload }
    }
    if(action.type === DECREASE_BREAK_MINUTES_ARRAY_INDEX) {
        return {...state, breakMinutesArrayIndex: action.breakMinutesArrayIndexPayload }
    }
    if(action.type === DECREASE_BREAK_SECONDS_ARRAY_INDEX ) {
        return {...state, breakSecondsArrayIndex: action.breakSecondsArrayIndexPayload }
    }
    if(action.type === UPDATE_SESSION_MINUTES_ARRAY_INDEX) {
        return {...state, sessionMinutesArrayIndex: action.sessionMinutesArrayIndexPayload }
    }
    if(action.type === UPDATE_SESSION_SECONDS_ARRAY_INDEX) {
        return {...state, sessionSecondsArrayIndex: action.sessionSecondsArrayIndexPayload }
    }
    if(action.type === UPDATE_BREAK_MINUTES_ARRAY_INDEX) {
        return {...state, breakMinutesArrayIndex: action.breakMinutesArrayIndexPayload }
    }
    if(action.type === UPDATE_BREAK_SECONDS_ARRAY_INDEX ) {
        return {...state, breakSecondsArrayIndex: action.breakSecondsArrayIndexPayload }
    }
    if(action.type === ALTERNATE_SESSION_AND_BREAK ) {
        return {...state, session: action.alternateSessionAndBreakPayload }
    }
    if(action.type === REFRESH) {
        return {...state,
            sessionMinutesArrayIndex: action.sessionMinutesArrayIndexPayload,
            sessionSecondsArrayIndex: action.sessionSecondsArrayIndexPayload,
            breakLength: action.breakLengthPayload,
            breakLengthIndex: action.breakLengthIndexPayload,
            sessionLength: action.sessionLengthPayload,
            sessionLengthIndex: action.sessionLengthIndexPayload,
            minutes: action.minutesPayload,
            seconds: action.secondsPayload,
            play: action.playPayload,
            session: action.sessionPayload,
        }
    }
    if(action.type === DEFAULT ) {
        return {...state }
    }
    return state;
}