import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const onSignupRequest = (dispatch, email, password) => {
    dispatch({
        type: SIGNUP_REQUEST
    });

    axios.post('http://localhost:9001/register', {email, password})
    .then(response => {
        if (response.data.error) {
            dispatch({
                type: SIGNUP_FAILURE,
                message: response.data.error
            });
        } else{
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response,
                message: response.data.message
            })
        }
    })
    .catch(err => console.log('err', err));        
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const onLoginRequest = (dispatch, email, password) => {
    dispatch({
        type: LOGIN_REQUEST
    });

    axios.post('http://localhost:9001/register', {email, password})
    .then(response => {
        if (response.data.error) {
            dispatch({
                type: SIGNUP_FAILURE,
                message: response.data.error
            });
        } else{
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response,
                message: response.data.message
            })
        }
    })
    .catch(err => console.log('err', err));        
};