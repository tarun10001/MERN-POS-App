// import {
//     applyMiddleware,
//     combineReducers,
//     compose,
//     legacy_createStore,
//   } from "redux";
//   import thunk from "redux-thunk";
//   import reducer from './reducer';
//   const rootReducers = combineReducers({

//   });
  
//   const composeEnhancers =
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         })
//       : compose;
  
//   const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
//   );
  
//   const store = legacy_createStore(rootReducers, enhancer);
  
//   export default store;




import {createStore, combineReducers} from "redux";
import { reducer } from "./reducer";

const finalReducer = combineReducers({
  reducer : reducer
});

const initialState = {
  reducer : {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : []
  }
}

export const store = createStore(finalReducer, initialState );