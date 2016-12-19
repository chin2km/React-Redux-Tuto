import axios from "axios";
export function fetchActors(){
    //return{
        //type:"ACTORS_FETCH",
        // payload: new Promise(resolve => {
        //                         setTimeout(() => fetch("http://swapi.co/api/people/?format=json")
        //                         .then(response => {
        //                         resolve(response.json());
        //                         }), 2000);
        //             })
        // payload: axios.get("http://swapi.co/api/people/?format=json")

        //}

        return function(dispatch){

            dispatch({
                    type:"ACTORS_FETCH_PENDING",
                        payload:true
                    })

            setTimeout(()=>{
                axios.get("http://swapi.co/api/people/?format=json")
                    .then((response)=>{
                        dispatch({
                            type:"ACTORS_FETCH_FULFILLED",
                            payload:response.data
                        })
                    })
                    .catch((err)=>{
                        dispatch({
                            type:"ACTORS_FETCH_REJECTED",
                            payload:err
                        })
                    });
            },2000)

        }
}

export function selectActor(actor){
    return {
        type:'ACTOR_SELECTED',
        payload:actor
    }
}

export function closeSelected (open){
    return {
        type:'CLOSE_SELECTED',
        payload:open
    }
}

export function hideLoader(){
    return {
        type:'HIDE_LOADER',
        payload:false
    }
}

export function showLoader (){
    return {
        type:'SHOW_LOADER',
        payload:true
    }
}