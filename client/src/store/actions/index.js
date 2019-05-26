import {GET_USER} from '../actionTypes';

const BASE_URL = 'http://localhost:3001/';

export const setUserToState = (user)=> ({
    type: GET_USER,
    payload: user
});

export function getUser() {
    return function(dispatch) {
        return fetch(`${BASE_URL}/getuser`)
        .then(response => response.json())
        .then(response => response.body.success 
            ? dispatch(setUserToState(response.body.data))
            : dispatch(setUserToState([])))
        .catch(err => err);
    }
}