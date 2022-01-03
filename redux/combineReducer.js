import { combineReducers } from "redux"
import {counterReducer, timerReducer} from "./reducers/reducer"


const reducers = {
    counter: counterReducer,
    timer: timerReducer,
  }
  
  export default combineReducers(reducers)

