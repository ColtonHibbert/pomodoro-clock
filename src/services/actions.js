import {
    DEFAULT,
    UPDATE_NUM,
} from './constants.js';

export const updateNum = () => {
    return ({
        type: UPDATE_NUM,
        updateNumPayload: 1,
    })
}