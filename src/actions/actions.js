import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export const onSignupRequest = (dispatch) => {
    axios.get('http://localhost:9001/test')
    .then(response => {
        console.log('response ', response);
        dispatch({
            type: SIGNUP_REQUEST,
            payload: response
        })
    })
    .catch(err => console.log(err));        
};