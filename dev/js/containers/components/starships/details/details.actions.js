export const FETCH_STARSHIP_BY_ID = "FETCH_STARSHIP_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";

export const fetchDataById = (starship) => {
    return {
        type: FETCH_STARSHIP_BY_ID,
        payload: starship
    }
}

export const putFetchedData=(starship)=>{
    return{
        type:PUT_FETCHED_DATA,
        payload: starship
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}