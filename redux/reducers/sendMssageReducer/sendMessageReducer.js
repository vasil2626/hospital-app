import * as types from "../../actionTypes"

const initialState = {
    success: false,
    errorMessage: "",
}


export const sendMessageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.SEND__MESSAGE__SUCCESS:
            return{
                ...state,
                success: true
            }
        case types.SEND__MESSAGE__FAILURE:
            return{
                ...state,
                success: false,
                errorMessage: payload
            }
            
    
        default: return state
    }
}