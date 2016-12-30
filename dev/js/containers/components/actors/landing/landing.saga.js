
import {httpRequest} from "../../../../utils/http-service";
import {delay} from "redux-saga";
import {call, select, put} from 'redux-saga/effects';

import {putActors,putFetchedActor} from "./landing.actions"

export function* fetchActorsSaga(action) {
  try {
      yield delay(1500);
      const response = yield call(httpRequest,'GET', "http://swapi.co/api/people/?format=json");

      yield put(putActors(response.data.results));
  } catch (error) {
  }

}

export function* fetchActorsByIdSaga(action) {
  try {
      yield delay(500);
      const response = yield call(httpRequest,'GET', action.payload.url);
      yield put(putFetchedActor(response.data));
  } catch (error) {
  }

}
