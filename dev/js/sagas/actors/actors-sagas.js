import {takeEvery,takeLatest} from 'redux-saga';


import { 
  FETCH_ACTORS,
        FETCH_ACTOR_BY_ID
               } from "../../actions/actors-actions"

import { fetchActorsSaga } from './fetch-actors-saga';
import { fetchActorsByIdSaga } from './fetch-actors-saga';


export default function* actorsSagas() {
  yield [
    takeLatest(FETCH_ACTORS,fetchActorsSaga),
    takeEvery(FETCH_ACTOR_BY_ID,fetchActorsByIdSaga)
  ]
}