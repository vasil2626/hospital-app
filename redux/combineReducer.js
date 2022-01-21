import { combineReducers } from "redux"
import { toggleReducer } from "./reducers/toggleReducer/toggleReducer"
import { getGlobalsReducer } from "./reducers/getGlobalsReducer/getGlobalsReducer"
import { getServiceReducer } from "./reducers/getServicesReducer/getServicesReducer"
import { getNewsReducer } from "./reducers/getNewsReducer/getNewsReducer"
import { sendMessageReducer } from "./reducers/sendMssageReducer/sendMessageReducer"
import { openBarReducer } from "./reducers/sideBarReducer/sideBarReducer"
import { registerReducer } from "./reducers/registerReducer/registerReducer"

const reducers = {
  toggleReducer,
  getGlobalsReducer,
  getServiceReducer,
  getNewsReducer,
  sendMessageReducer,
  openBarReducer,
  registerReducer
}

export default combineReducers(reducers)

