import {SET_TODO} from '../Actions/ActionsTypes';

export function todo(state = null, action) {
    switch (action.type) {
        case SET_TODO:
            return action.payload.todo;
        default:
            return state;
    }
}
