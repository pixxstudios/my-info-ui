import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export const onSignupRequest = (dispatch, email, password) => {
    axios.post('http://localhost:9001/register', {email, password})
    .then(response => {
        dispatch({
            type: SIGNUP_REQUEST,
            payload: response
        })
    })
    .catch(err => console.log(err));        
};