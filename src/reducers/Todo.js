import {SET_TODO} from '../actions/ActionsTypes';

export function todo(state = null, action) {
    switch (action.type) {
        case SET_TODO:
            return action.payload.todo;
        default:
            return state;
    }
}
