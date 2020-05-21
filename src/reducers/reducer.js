import * as actions from '../actions/actions';

const intitalState = {
    data: ''
};

const mainReducer = (state = intitalState, action) => {
    console.log('MyInfoReducer ', action);
    switch(action.type) {
    case actions.SIGNUP_REQUEST: {
        return { ...state,
        data: action.payload.data }
    }
    default:
        return state;
    }
}

export default mainReducer;