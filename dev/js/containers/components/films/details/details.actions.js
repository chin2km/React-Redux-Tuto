export const FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";

export const fetchDataById = (actor) => {
    return {
        type: FETCH_DATA_BY_ID,
        payload: actor
    }
}

export const putFetchedData=(actor)=>{
    return{
        type:PUT_FETCHED_DATA,
        payload: actor
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}