import { combineReducers } from "redux";
import { sidebar } from "../Reducer/index"

export const rootReducer = combineReducers({
    sidebar: sidebar,
});