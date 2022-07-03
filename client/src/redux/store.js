import {createStore, combineReducers} from "redux";
import { reducer } from "./reducer";

const finalReducer = combineReducers({
  reducer : reducer
});

const initialState = {
  reducer : {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : []
  }
};


export const store = createStore(finalReducer, initialState );