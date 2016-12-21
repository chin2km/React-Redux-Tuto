import {takeEvery} from 'redux-saga';


import { 
  FETCH_ACTORS,
        ACTOR_SELECTED
               } from "../../actions/actors-actions"

import { fetchActorsSaga } from './fetch-actors-saga';
import { fetchActorsFullfilledSaga } from './fetch-actors-saga';
import { fetchActorsRejectedSaga } from './fetch-actors-saga';
import { actorSelectedSaga } from './fetch-actors-saga';
import { closeSelectedSaga } from './fetch-actors-saga';


export default function* actorsSagas() {
  yield [
    takeEvery(FETCH_ACTORS,fetchActorsSaga)
  ]
}