import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import actorSagas from "./actors/actors-sagas";

export default function* rootSaga() {
  yield [
    actorSagas()
  ]
}