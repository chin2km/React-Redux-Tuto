import { combineReducers } from "redux";
import LandingReducer from "./landing/landing.reducer";
import DetailsReducer from "./details/details.reducer";

const StarshipsReducers = combineReducers({
    landing: LandingReducer,
    details: DetailsReducer
});

export default StarshipsReducers;