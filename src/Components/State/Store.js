import { combineReducers,legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


export const conStore=()=>{
    return legacy_createStore(combineReducers(),composeWithDevTools());
}