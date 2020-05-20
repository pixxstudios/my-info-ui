import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export const onSignupRequest = () => {
    axios.get('http://localhost:9001/test')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

    return (dispatch) => dispatch({
        type: SIGNUP_REQUEST
    })
};