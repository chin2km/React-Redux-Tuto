import {takeEvery,takeLatest} from 'redux-saga';


import * as LandingActions from "./landing/landing.actions";
import * as DetailActions from "./details/details.actions";

import * as LandingSagas from './landing/landing.saga';
import * as DetailsSagas from './details/details.saga';


export  default function* ActorsSagas() {
  yield [
    takeLatest(LandingActions.FETCH_ACTORS_BY_PAGE, LandingSagas.fetchDataByPageSaga),
    takeEvery(DetailActions.FETCH_ACTOR_BY_ID, DetailsSagas.fetchDataByIdSaga)
  ]
}