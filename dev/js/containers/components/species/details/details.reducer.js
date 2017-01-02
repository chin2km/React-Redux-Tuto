import {FETCH_SPECIES_BY_ID,PUT_FETCHED_DATA,CLOSE_SELECTED} from "./details.actions";

const initState={
    selected:false,
    loaded:false,
    activeSpecies:null,
}

export default function (state=initState,action) {

    const newState = Object.assign({},state);

    switch(action.type){
        case FETCH_SPECIES_BY_ID:
            newState.selected =  true;
            newState.loaded=false;
            break;
        case PUT_FETCHED_DATA:
            newState.loaded=true;
            newState.activeSpecies=action.payload;
            break;
        case CLOSE_SELECTED:
            return Object.assign({},initState);
            break;
    }

    return newState;

}