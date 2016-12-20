export const ACTORS_FETCH_PENDING = "ACTORS_FETCH_PENDING";
export const ACTORS_FETCH_FULFILLED = "ACTORS_FETCH_FULFILLED";
export const ACTORS_FETCH_REJECTED = "ACTORS_FETCH_REJECTED";
export const ACTOR_SELECTED = "ACTOR_SELECTED";
export const CLOSE_SELECTED = "CLOSE_SELECTED";



import axios from "axios";
export const fetchActors = () => {

    return function (dispatch) {

        dispatch({
            type: ACTORS_FETCH_PENDING,
            payload: true
        })

        axios.get("http://swapi.co/api/people/?format=json")
            .then((response) => {
                dispatch({
                    type: ACTORS_FETCH_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: ACTORS_FETCH_REJECTED,
                    payload: err
                })
            });

    }
}

export const selectActor = (actor) => {
    return {
        type: ACTOR_SELECTED,
        payload: actor
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}





///////////////////////////
// Promise based fetch/////
///////////////////////////
    //return{
        //type:"ACTORS_FETCH",
        // payload: new Promise(resolve => {
        //                         setTimeout(() => fetch("http://swapi.co/api/people/?format=json")
        //                         .then(response => {
        //                         resolve(response.json());
        //                         }), 2000);
        //             })
        // payload: axios.get("http://swapi.co/api/people/?format=json")

        //}