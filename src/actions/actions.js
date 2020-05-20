import thunk from 'redux-thunk';
import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export const onSignupRequest = async () => {
    await axios.get('http://localhost:9001/test')
    .then(res => console.log(res))
    .catch(err => console.log(err))

    return (dispatch) => dispatch({
        type: SIGNUP_REQUEST
    })
};