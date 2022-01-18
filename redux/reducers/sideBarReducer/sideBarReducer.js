import * as types from "../../actionTypes"

const initialState = {
    isOpen: null
}

export const openBarReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case types.OPEN__SIDE__BAR:
            return{
                ...state,
                isOpen: payload
            }
            default: return state
    }
}