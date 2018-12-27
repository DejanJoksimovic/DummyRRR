import {SET_DUMMY_TEXT} from '../Actions/ActionsTypes';

export function dummyText(state = null, action) {
    switch (action.type) {
        case SET_DUMMY_TEXT:
            return action.payload.dummyText;
        default:
            return state;
    }
}
