const initState={
    selected:false,
    activeActor:null,
}

export default function (state=initState,action) {

    const newState = Object.assign({},state);

    switch(action.type){
        case "ACTOR_SELECTED":
            newState.selected =  true;
            newState.activeActor =  action.payload;
            break;
        case "CLOSE_SELECTED":
            newState.selected =  action.payload;
            newState.activeActor =  null;
            break;
        case "ACTORS_FETCH_FULFILLED":
            newState.loaded =  true;
            break;

    }

    return newState;

}