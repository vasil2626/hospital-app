import * as types from "../../actionTypes" 

const initialState ={
    data: []
}

export const getGlobalsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case types.GET__GLOBALS__SUCCESS:
            return {
                ...state,
                data: payload
            }
            default: return state
    }
}


