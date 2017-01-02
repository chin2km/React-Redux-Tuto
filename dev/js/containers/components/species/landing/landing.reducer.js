import {FETCH_SPECIES_BY_PAGE , PUT_DATA} from "./landing.actions"

const initState={
    fetched:false,
    species:[],
    pages: 0,
    error:null
}

export default function (state = initState, action) {
    
    switch (action.type) {
        case FETCH_SPECIES_BY_PAGE:
            return Object.assign({}, initState);
            break;
        case PUT_DATA:
            return Object.assign({}, state, {fetched: true, species: action.payload.results, pages: Math.ceil(action.payload.count/10)});
            break;
    }

    return state;

}
