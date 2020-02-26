import {SET_TODO, SET_SHOPPING_LIST} from '../actions/ActionsTypes';
import api from '../services/ApiService';
import convert from 'xml-js';

export function createSetTodo(todo) {
    return {
        type: SET_TODO,
        payload: {todo}
    };
}

export function createSetShoppingList(shoppingList) {
    return {
        type: SET_SHOPPING_LIST,
        payload: {shoppingList}
    };
}

// parse Json
export function loadTodo() {
    return dispatch =>
        api.get('/todos/1')
            .then(response => response.data)
            .then(data => dispatch(createSetTodo(data)));
}

// parse XML
// export function loadTodo() {
//     return dispatch =>
//         api.get('/todos/1')
//             .then(response => JSON.parse(convert.xml2json(response.data)))
//             // extract data
//             .then(converted => converted.elements[0].elements[0].attributes)
//             .then(data => dispatch(createSetTodo(data)));
// }

export function loadShoppingList() {
    return dispatch =>
        api.get('/shoppingList')
            .then(response => response.data)
            .then(data => dispatch(createSetShoppingList(data.list)));
}

export function clearShoppingList() {
    return dispatch =>
        dispatch(createSetShoppingList(null));
}


export function clearTodo() {
    return dispatch =>
        dispatch(createSetTodo(null));
}

