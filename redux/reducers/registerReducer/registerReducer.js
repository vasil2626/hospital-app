import * as types from "../../actionTypes"

const initialState = {
    success: false,
    popUpData:[],
    error: null
}

export const registerReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case types.SET__POPUP__DATA:
            return {
                ...state,
                popUpData: payload
            }
        case types.REGISTER__SUCCESS:
            return {
                ...state,
                success: payload
            }
            case types.REGISTER__FAILURE:
                return{
                    ...state,
                    error: payload
                }
                default: return state
    }

}