import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer";
import countReducer from "./countReducer";
const reducer = combineReducers({
    counter: countReducer,
    todo:todoReducer,
})
const storeee = createStore(reducer);
export default storeee