
import {httpRequest} from "../../../../utils/http-service";
import {delay} from "redux-saga";
import {call, select, put} from 'redux-saga/effects';

import {putFetchedData} from "./details.actions"

export function* fetchDataByIdSaga(action) {
  try {
      yield delay(500);
      const response = yield call(httpRequest,'GET', action.payload.url);
      yield put(putFetchedData(response.data));
  } catch (error) {
  }

}