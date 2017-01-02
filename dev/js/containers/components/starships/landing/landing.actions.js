export const PUT_DATA = "PUT_DATA";
export const FETCH_STARSHIPS_BY_PAGE = "FETCH_STARSHIPS_BY_PAGE";
export const FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID";
export const PUT_FETCHED_DATA ="PUT_FETCHED_DATA";
export const CLOSE_SELECTED = "CLOSE_SELECTED";



export const fetchDataByPage = (pageNo) => {
    return function (dispatch) {
        dispatch({
            type: FETCH_STARSHIPS_BY_PAGE,
            payload: pageNo
        });
    }
}
export const putData = (starships) => {
    return function (dispatch) {
        dispatch({
            type: PUT_DATA,
            payload: starships
        });
    }
}