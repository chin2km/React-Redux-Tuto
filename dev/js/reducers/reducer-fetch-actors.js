const initState={
    fetching:false,
    fetched:false,
    actors:[],
    error:null
}

export default function (state = initState, action) {
    
    
    switch (action.type) {
        case "ACTORS_FETCH_PENDING":
            return Object.assign({},state,{fetching:true});
            break;
        case "ACTORS_FETCH_FULFILLED":
            return Object.assign({},state,{fetching:false,fetched:true,actors:action.payload.results});
            break;
        case "ACTORS_FETCH_REJECTED":
            return Object.assign({},state,{fetching:false,fetched:true,error:action.payload});
            break;
    }

    return state;

}
