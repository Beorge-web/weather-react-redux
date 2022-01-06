import { combineReducers } from "@reduxjs/toolkit";
import { weatherReducer } from "./weatherReducer";
export const rootReducer = combineReducers({
    weatherReducer
});