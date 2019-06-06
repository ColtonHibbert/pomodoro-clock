import {
    DEFAULT,
    UPDATE_NUM,
} from './constants.js';

const initialState = {
    number: 0,
}

export const reducer = ( state=initialState, action={} ) => {
    if(action.type === UPDATE_NUM) {
        return {...state, number: action.updateNumPayload }
    }
    if(action.type === DEFAULT ) {
        return {...state }
    }
    return state;
}