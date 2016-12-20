import {delay} from "redux-saga";

export function* fetchActors() {
  yield delay(5000)
  yield console.log('Fetch Actors Saga!')
}