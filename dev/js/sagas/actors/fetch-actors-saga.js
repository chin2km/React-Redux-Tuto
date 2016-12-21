
import {httpRequest} from "../../utils/http-service";
import {call, select, put} from 'redux-saga/effects';

import {putActors} from "../../actions/actors-actions"

export function* fetchActorsSaga(action) {
  const response = yield call(httpRequest,'GET', 'people/?format=json');

  yield put(putActors(response.data.results));
}
