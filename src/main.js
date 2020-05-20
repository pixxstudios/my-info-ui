import React from 'react';
import { createStore, applyMiddleware } from 'redux'; 
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime.js";
import { BrowserRouter } from 'react-router-dom';
import MyInfoReducer from './reducers/reducer';
import App from './app';

const store = createStore(
    MyInfoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
