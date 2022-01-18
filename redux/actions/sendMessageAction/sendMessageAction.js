import axios from "axios"
import * as types from "../../actionTypes"

const url = "http://hosting2.inorain.com:8023"

export const sendMessage = (data) => {
    return (dispatch) => {
        axios.post(`${url}/contacts`, data)
            .then(res => dispatch({ type: types.SEND__MESSAGE__SUCCESS, payload: res }))
            .catch((error) => {
                dispatch({ type: types.SEND__MESSAGE__FAILURE, payload: error })
            })
    }
}