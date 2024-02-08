import { applyMiddleware, combineReducers, createStore } from "redux";
import numberReducer from "./thunkReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    num :numberReducer
})
const storeeee = createStore(reducer,applyMiddleware(thunk))

export default storeeee