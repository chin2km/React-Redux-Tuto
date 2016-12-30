import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore,applyMiddleware } from "redux";
import App from './containers/App';
import Actors from './containers/components/actors/actors.layout'
import Starships from './containers/components/starships/starships'
import Films from './containers/components/films/films'
import allReducers from './reducers';
import thunkMiddleware from "redux-thunk";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import rootSaga from './containers/components/App.Sagas';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(promiseMiddleware() ,sagaMiddleware, thunkMiddleware , logger());
const store = createStore(allReducers,middlewares);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history = {browserHistory}>
                <Route path = "/" component = {App}>
                    <IndexRoute component = {Actors} />
                    <Route path = "actors" component = {Actors} />
                    <Route path = "starships" component = {Starships} />
                    <Route path = "films" component = {Films} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
