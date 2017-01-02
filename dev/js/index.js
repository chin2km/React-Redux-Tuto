import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore,applyMiddleware } from "redux";
import App from './containers/App';
import Actors from './containers/components/actors/actors.layout'
import Starships from './containers/components/starships/starships.layout'
import Films from './containers/components/films/films.layout'
import Planets from './containers/components/planets/planets.layout'
import Vehicles from './containers/components/vehicles/vehicles.layout'
import Species from './containers/components/species/species.layout'

import allReducers from './containers/components/App.Reducers';
import thunkMiddleware from "redux-thunk";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import rootSaga from './containers/components/App.Sagas';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { createHistory, useBasename } from 'history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(promiseMiddleware() ,sagaMiddleware, thunkMiddleware , logger());
const store = createStore(allReducers,middlewares);

sagaMiddleware.run(rootSaga);


const history = useBasename(createHistory)({
  basename: '/React-Redux-Tuto'
})

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history = {history}>
                <Route path = "/" component = {App}>
                    <IndexRoute component = {Actors} />
                    <Route path = "actors" component = {Actors} />
                    <Route path = "starships" component = {Starships} />
                    <Route path = "films" component = {Films} />
                    <Route path = "planets" component = {Planets} />
                    <Route path = "vehicles" component = {Vehicles} />
                    <Route path = "species" component = {Species} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
