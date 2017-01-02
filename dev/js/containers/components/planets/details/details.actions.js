export const FETCH_PLANET_BY_ID = "FETCH_PLANET_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";

export const fetchDataById = (planet) => {
    return {
        type: FETCH_PLANET_BY_ID,
        payload: planet
    }
}

export const putFetchedData=(planet)=>{
    return{
        type:PUT_FETCHED_DATA,
        payload: planet
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}