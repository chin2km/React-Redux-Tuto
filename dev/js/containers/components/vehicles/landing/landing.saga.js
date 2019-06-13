
import {httpRequest} from "../../../../utils/http-service";
import {delay} from "redux-saga";
import {call, select, put} from 'redux-saga/effects';

import {putData} from "./landing.actions"

export function* fetchDataByPageSaga(action) {
  try {
    if(action.payload === 1){
      yield delay(500);
    }

    const response = yield call(httpRequest,'GET', "https://swapi.co/api/vehicles/?format=json&page="+action.payload);
    yield put(putData(response.data));
    
  } catch (error) {
  }

}