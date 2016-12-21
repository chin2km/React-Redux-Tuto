import { combineReducers } from "redux";
import AllActorsReducer from "./reducer-fetch-actors";
import ActiveActorReducer from "./reducer-active-actor";

const allReducers = combineReducers({
    fetcher: AllActorsReducer,
    selector:ActiveActorReducer
});

export default allReducers;