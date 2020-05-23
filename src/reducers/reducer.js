import * as actions from '../actions/actions';

const intitalState = {
    showLoader: false,
    message: ''
};

const mainReducer = (state = intitalState, action) => {
    switch(action.type) {
    case actions.SIGNUP_REQUEST: {
        return { ...state,
        showLoader: true,
        message: '' }
    }

    case actions.SIGNUP_SUCCESS: {
        return { ...state,
            showLoader: false,
            data: action.payload.data,
            message: action.message }
    }

    case actions.SIGNUP_FAILURE: {
        return { ...state,
            showLoader: false,
            message: action.message }
    }

    default:
        return state;
    }
}

export default mainReducer;