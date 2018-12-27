import {SET_SOME_ID, SET_DUMMY_TEXT} from '../Actions/ActionsTypes';
import fapi from '../services/FAPIService'

export function createSetSomeId(someId) {
    return {
        type: SET_SOME_ID,
        payload: {someId}
    };
}

export function createSetDummyText(dummyText) {
    return {
        type: SET_DUMMY_TEXT,
        payload: {dummyText}
    };
}

export function load() {
    return dispatch =>
        fapi.get('/todos/1')
            .then(response => response.data)
            .then(data => dispatch(createSetSomeId(data.id)) && dispatch(createSetDummyText(data.title)))
}
