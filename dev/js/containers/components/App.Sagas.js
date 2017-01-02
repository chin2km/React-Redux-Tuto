import {
    takeEvery,
    delay
} from 'redux-saga';
import {
    put,
    call
} from 'redux-saga/effects';

import ActorsSagas from "./actors/actors.sagas";
import FilmsSagas from "./films/films.sagas";
import PlanetsSagas from "./planets/planets.sagas";
import SpeciesSagas from "./species/species.sagas";
import StarshipsSagas from "./starships/starships.sagas";
import VehiclesSagas from "./vehicles/vehicles.sagas";

export default function* rootSaga() {

    try {
        while (true) {
            yield [
                call(ActorsSagas),
                call(FilmsSagas),
                call(PlanetsSagas),
                call(SpeciesSagas),
                call(StarshipsSagas),
                call(VehiclesSagas)
            ]
        }
    } catch (error) {
        console.log(error)
    }

}