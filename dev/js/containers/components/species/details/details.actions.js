export const FETCH_SPECIES_BY_ID = "FETCH_SPECIES_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";

export const fetchDataById = (species) => {
    return {
        type: FETCH_SPECIES_BY_ID,
        payload: species
    }
}

export const putFetchedData=(species)=>{
    return{
        type:PUT_FETCHED_DATA,
        payload: species
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}