import * as type from "../../actionTypes"

export const getNews = (newsData) =>{
    return (dispatch) =>{
        dispatch({type: type.GET__NEWS__SUCCESS, payload: newsData})
    }
}