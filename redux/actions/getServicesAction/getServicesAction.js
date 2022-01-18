import * as type from "../../actionTypes"

export const getServices = (services) =>{
    return (dispatch) =>{
        dispatch({type: type.GET__SERVICES__SUCCESS, payload: services})
    }
}