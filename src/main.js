import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'; 
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime.js";
import { BrowserRouter } from 'react-router-dom';
import MyInfoReducer from './reducers/reducer';
import App from './app';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    MyInfoReducer,
    composeEnhancer(applyMiddleware(thunk))
    );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
