export const FETCH_FILM_BY_ID = "FETCH_FILM_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";

export const fetchDataById = (film) => {
    return {
        type: FETCH_FILM_BY_ID,
        payload: film
    }
}

export const putFetchedData=(film)=>{
    return{
        type:PUT_FETCHED_DATA,
        payload: film
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}