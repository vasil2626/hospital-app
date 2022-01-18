import * as types from "../../actionTypes"
import defaultImage from "../../../Assets/similar/papers.svg"

export const initialState = {
    services: [],
    error: false
}


export const getServiceReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case types.GET__SERVICES__SUCCESS:
            return{
                ...state,
                services: payload
            }
            case types.GET__SERVICES__FAILURE:
                return{
                    ...state,
                    error: payload
                }
            default: return state
    }
}