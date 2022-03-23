import {  createStore } from "redux";
import {Reducer} from "./reducerIndex"

// import thunk from 'redux-thunk';  applyMiddleware(thunk)

export const store = createStore(Reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


if (window.Cypress) {
    window.store = store
  }
