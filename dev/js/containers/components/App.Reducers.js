import { combineReducers } from "redux";
import ActorsReducers from "./actors/actors.reducers";
import FilmsReducers from "./films/films.reducers";
import PlanetsReducers from "./planets/planets.reducers";
import SpeciesReducers from "./species/species.reducers";
import StarshipsReducers from "./starships/starships.reducers";
import VehiclesReducers from "./vehicles/vehicles.reducers";

const allReducers = combineReducers({
    ActorsReducers,
    FilmsReducers,
    PlanetsReducers,
    SpeciesReducers,
    StarshipsReducers,
    VehiclesReducers
});

export default allReducers;