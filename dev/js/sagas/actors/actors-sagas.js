import {takeEvery} from 'redux-saga';


import { 
  ACTORS_FETCH_PENDING,
    ACTORS_FETCH_FULFILLED,
      ACTORS_FETCH_REJECTED,
        ACTOR_SELECTED,
          CLOSE_SELECTED
               } from "../../actions/actors-actions"

import { fetchActorsSaga } from './fetch-actors-saga';
import { fetchActorsFullfilledSaga } from './fetch-actors-saga';
import { fetchActorsRejectedSaga } from './fetch-actors-saga';
import { actorSelectedSaga } from './fetch-actors-saga';
import { closeSelectedSaga } from './fetch-actors-saga';


export default function* actorsSagas() {
  yield [
    //takeEvery(ACTOR_SELECTED,fetchActorsSaga)
  ]
}