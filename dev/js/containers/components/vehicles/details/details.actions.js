export const FETCH_VEHICLE_BY_ID = "FETCH_VEHICLE_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";

export const fetchDataById = (vehicle) => {
    return {
        type: FETCH_VEHICLE_BY_ID,
        payload: vehicle
    }
}

export const putFetchedData=(vehicle)=>{
    return{
        type:PUT_FETCHED_DATA,
        payload: vehicle
    }
}

export const closeSelected = (open) => {
    return {
        type: CLOSE_SELECTED,
        payload: open
    }
}