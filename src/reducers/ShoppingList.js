import {SET_SHOPPING_LIST} from '../Actions/ActionsTypes';

export function shoppingList(state = null, action) {
    switch (action.type) {
        case SET_SHOPPING_LIST:
            return action.payload.shoppingList;
        default:
            return state;
    }
}
