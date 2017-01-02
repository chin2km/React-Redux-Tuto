import {FETCH_FILMS_BY_PAGE , PUT_DATA} from "./landing.actions"

const initState={
    fetched:false,
    films:[],
    pages: 0,
    error:null
}

export default function (state = initState, action) {
    
    switch (action.type) {
        case FETCH_FILMS_BY_PAGE:
            return Object.assign({}, initState);
            break;
        case PUT_DATA:
            return Object.assign({}, state, {fetched: true, films: action.payload.results, pages: Math.ceil(action.payload.count/10)});
            break;
    }

    return state;

}
