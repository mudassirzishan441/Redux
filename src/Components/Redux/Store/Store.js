import { combineReducers,legacy_createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FirstReducer} from "../Reducer/Reducer"


export const configStore = ()=>{ 
    return legacy_createStore(
        combineReducers({FirstReducer}),
        composeWithDevTools()
    )

};