import { combineReducers } from '@reduxjs/toolkit';
import { weatherReducer } from './weatherReducer';
import { loaderReducer } from './loaderReducer';
export const rootReducer = combineReducers({
	weatherReducer,
	loaderReducer,
});
