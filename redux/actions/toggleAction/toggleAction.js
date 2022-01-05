import * as type from "../../actionTypes"

export const toggle = (toggleState) =>{
    return (dispatch) => {
        dispatch({type: type.TOGGLE, payload:toggleState})
    }
}