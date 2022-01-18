import * as type from "../../actionTypes"


export const getGlobals = (data) => {
    return (dispatch) => {
        dispatch({type: type.GET__GLOBALS__SUCCESS, payload:data})
    }
}