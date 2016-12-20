import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore,applyMiddleware } from "redux";
import App from './components/App'
import allReducers from './reducers';
import thunkMiddleware from "redux-thunk";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/root-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(promiseMiddleware() ,sagaMiddleware, thunkMiddleware , logger());
const store = createStore(allReducers,middlewares);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
