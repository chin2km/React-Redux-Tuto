export const PUT_DATA = "PUT_DATA";
export const FETCH_VEHICLES_BY_PAGE = "FETCH_VEHICLES_BY_PAGE";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";



export const fetchDataByPage = (pageNo) => {
    return function (dispatch) {
        dispatch({
            type: FETCH_VEHICLES_BY_PAGE,
            payload: pageNo
        });
    }
}
export const putData = (vehicles) => {
    return function (dispatch) {
        dispatch({
            type: PUT_DATA,
            payload: vehicles
        });
    }
}