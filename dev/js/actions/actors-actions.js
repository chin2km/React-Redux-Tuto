export const PUT_ACTORS = "PUT_ACTORS";
export const FETCH_ACTORS = "FETCH_ACTORS";
export const ACTOR_SELECTED = "ACTOR_SELECTED";
export const CLOSE_SELECTED = "CLOSE_SELECTED";



import axios from "axios";
export const fetchActors = () => {
    return function (dispatch) {
        dispatch({
            type: FETCH_ACTORS,
            payload: true
        });
    }
}
export const putActors = (actors) => {
    return function (dispatch) {
        dispatch({
            type: PUT_ACTORS,
            payload: actors
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