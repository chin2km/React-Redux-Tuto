export const PUT_ACTORS = "PUT_ACTORS";
export const FETCH_ACTORS = "FETCH_ACTORS";
export const FETCH_ACTOR_BY_ID = "FETCH_ACTOR_BY_ID";
export const PUT_FETCHED_ACTOR ="PUT_FETCHED_ACTOR";
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

export const fetchActorById = (actor) => {
    return {
        type: FETCH_ACTOR_BY_ID,
        payload: actor
    }
}

export const putFetchedActor=(actor)=>{
    return{
        type:PUT_FETCHED_ACTOR,
        payload:actor
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}