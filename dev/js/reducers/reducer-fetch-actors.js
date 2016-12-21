const initState={
    fetching:false,
    fetched:false,
    actors:[],
    error:null
}

export default function (state = initState, action) {
    
    switch (action.type) {
        case "FETCH_ACTORS":
            return Object.assign({},state,{fetching:true});
            break;
        case "PUT_ACTORS":
            return Object.assign({},state,{fetching:false,fetched:true,actors:action.payload});
            break;
        case "ACTORS_FETCH_REJECTED":
            return Object.assign({},state,{fetching:false,fetched:true,error:action.payload});
            break;
    }

    return state;

}
