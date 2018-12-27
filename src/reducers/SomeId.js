import {SET_SOME_ID} from '../Actions/ActionsTypes';

export function someId(state = null, action) {
    switch (action.type) {
        case SET_SOME_ID:
            return action.payload.someId;
        default:
            return state;
    }
}
