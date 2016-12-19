const initState={
    visibility:false
}

export default function (state=initState,action) {

    const newState = Object.assign({},state);

    switch(action.type){
        case "SHOW_LOADER":
            newState.visibility=true;
            break;
        case "HIDE_LOADER":
            newState.visibility=false;
            break;
        case "ACTOR_SELECTED":
            newState.visibility=true;
            break;
        case "ACTORS_FETCH_REJECTED":
            newState.visibility=false;
            break;
        case "ACTORS_FETCH_FULFILLED":
            newState.visibility=false;
            break;
        default:
            return newState;
            break;

    }

    return newState;

}