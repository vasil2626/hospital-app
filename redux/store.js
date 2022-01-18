import { createStore, applyMiddleware } from 'redux'
import { HYDRATE ,createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './combineReducer'



const  middleware = [thunkMiddleware]

const bindMiddleware = () => {
  if (process.env.NODE_ENV !== "production") {
    middleware.push(logger)
  }
  return applyMiddleware(...middleware);
};


const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
     const nextState = {
      ...state, 
      ...action.payload, 
    };
    return nextState;
  } else {
    return reducers(state, action);

  }
};


const initStore = () => {
  return createStore(rootReducer, bindMiddleware(...middleware));
};
export const wrapper = createWrapper(initStore, {debug: true});