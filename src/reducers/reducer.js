import * as actions from '../actions/actions';

const intitalState = {
    showLoader: false,
    errorMessage: ''
};

const mainReducer = (state = intitalState, action) => {
    switch(action.type) {
    case actions.SIGNUP_REQUEST: {
        return { ...state,
        showLoader: true,
        errorMessage: '' }
    }

    case actions.SIGNUP_SUCCESS: {
        return { ...state,
            showLoader: false,
            data: action.payload.data }
    }

    case actions.SIGNUP_FAILURE: {
        return { ...state,
            showLoader: false,
            errorMessage: action.message }
    }

    default:
        return state;
    }
}

export default mainReducer;