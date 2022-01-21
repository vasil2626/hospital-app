import * as types from "../../actionTypes"
import { request } from "../../requests/request"


const url = "http://hosting2.inorain.com:8023"

export const registerAction = (rol, data, popUpData) => {
    return (dispatch) => {
        dispatch({type: types.SET__POPUP__DATA, payload: popUpData})
        let endpoint = `${url}/clinics/register`;
        if (rol === "requestor") endpoint = `${url}/requestor`
        request(endpoint, "post", data, (success => {
            dispatch({ type: types.REGISTER__SUCCESS, payload: success })
        }), ((error) => {
            dispatch({ type: types.REGISTER__FAILURE, payload: error })
        }))
    }
}