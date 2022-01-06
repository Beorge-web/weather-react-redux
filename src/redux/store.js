import {  createStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
