import * as types from "../../actionTypes"

export const initialState = {
    news: [],
    error: false
}


export const getNewsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case types.GET__NEWS__SUCCESS:
            return{
                ...state,
                news: payload
            }
            case types.GET__NEWS__FAILURE:
                return{
                    ...state,
                    error: payload
                }
            default: return state
    }
}