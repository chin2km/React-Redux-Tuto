import { combineReducers } from "redux";
import ActorsReducers from "./actors/actors.reducers";

const allReducers = combineReducers({
    ActorsReducers
});

export default allReducers;