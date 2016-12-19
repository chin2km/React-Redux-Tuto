import { combineReducers } from "redux";
import AllActorsReducer from "./reducer-fetch-actors";
import ActiveActorReducer from "./reducer-active-actor";
import SiteLoader from "./reducer-loader";

const allReducers = combineReducers({
    fetcher: AllActorsReducer,
    selector:ActiveActorReducer,
    loader:SiteLoader
});

export default allReducers;