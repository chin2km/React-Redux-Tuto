import { takeEvery, delay } from 'redux-saga';
import { put,call } from 'redux-saga/effects';

import ActorsSagas from "./actors/actors.sagas";

export default function* rootSaga() {
    
    try {
        while (true) {
          yield [
              call(ActorsSagas)
          ]
        }
    } catch (error) {
      console.log(error)
    }

}