import * as types from "../../actionTypes"

export const openSideBar = (state) =>{
    return (dispatch) =>{
        dispatch({type:types.OPEN__SIDE__BAR, payload: state})
    }
}