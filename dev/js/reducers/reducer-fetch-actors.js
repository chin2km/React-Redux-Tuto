const initState={
    fetched:false,
    actors:[],
    error:null
}

export default function (state = initState, action) {
    
    switch (action.type) {
        case "FETCH_ACTORS":
            return Object.assign({},initState);
            break;
        case "PUT_ACTORS":
            return Object.assign({},state,{fetched:true,actors:action.payload});
            break;
    }

    return state;

}
