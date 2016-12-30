import {takeEvery,takeLatest} from 'redux-saga';


import * as LandingActions from "./landing/landing.actions";
import * as DetailActions from "./details/details.actions";

import * as LandingSagas from './landing/landing.saga';


export default function* actorsSagas() {
  yield [
    takeLatest(LandingActions.FETCH_ACTORS, LandingSagas.fetchActorsSaga),
    takeEvery(LandingActions.FETCH_ACTOR_BY_ID, LandingSagas.fetchActorsByIdSaga)
  ]
}