import { combineReducers } from "redux";
import LandingReducer from "./landing/landing.reducer";
import DetailsReducer from "./details/details.reducer";

const FilmsReducers = combineReducers({
    landing: LandingReducer,
    details: DetailsReducer
});

export default FilmsReducers;