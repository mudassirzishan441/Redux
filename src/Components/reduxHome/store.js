import { legacy_createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ecommerceReducer } from "./ecommerceReducer";
import { dummyReducer } from "./dummyReducer";


export const myStore=()=>{
    const state = legacy_createStore(combineReducers({ecommerceReducer,dummyReducer}),composeWithDevTools())
    return state 
};