import { ActionTypes } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const ProductReducer = (state = initState,{type,payload})=>{
    // add the switch statement for different actions

    switch(type){
        case ActionTypes.GET_PRODUCTS:
        return {...state,products:payload};
        default: 
        return state;
    }
}