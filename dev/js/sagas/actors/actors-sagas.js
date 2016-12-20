import { fetchActors } from './fetch-actors-saga';

export default function* rootSaga() {
  yield [
    fetchActors()
  ]
}