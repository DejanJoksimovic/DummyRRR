import {SET_SOME_ID, SET_DUMMY_TEXT} from '../actions/ActionsTypes';
import fapi from '../services/FAPIService'
import expressAppService from '../services/expressAppService'

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

export function getFromExpressAppService() {
    return dispatch =>
        expressAppService.get('/')
            .then(response => response.data)
            .then(data => dispatch(createSetDummyText(data)))
}
export function postFromExpressAppService() {
    return () =>
        expressAppService.post('/')
            .then(response => response.data)
            .then(data => console.log(data))
}
export function putFromExpressAppService() {
    return () =>
        expressAppService.put('/user')
            .then(response => response.data)
            .then(data => console.log(data))
}
export function deleteFromExpressAppService() {
    return () =>
        expressAppService.delete('/user')
            .then(response => response.data)
            .then(data => console.log(data))
}
