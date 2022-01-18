import * as types from '../../actionTypes'

const initialState = {
  toggle: "profile"

}

export const toggleReducer = (state = initialState, {type, payload}) =>{
  switch (type) {
    case types.TOGGLE:
      return{
        ...state,
        toggle: payload
      }
      default: return state
  }
}
