import {SET_DUMMY_TEXT} from '../actions/ActionsTypes';

export function dummyText(state = null, action) {
    switch (action.type) {
        case SET_DUMMY_TEXT:
            return action.payload.dummyText;
        default:
            return state;
    }
}
