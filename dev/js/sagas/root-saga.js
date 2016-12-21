import { takeEvery, delay } from 'redux-saga';
import { put,call } from 'redux-saga/effects';

import actorsSagas from "./actors/actors-sagas";

export default function* rootSaga() {
    
    try {
        while (true) {
          yield [
              call(actorsSagas)
          ]
        }
    } catch (error) {
      console.log(error)
    }

}