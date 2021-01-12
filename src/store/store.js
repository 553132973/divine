import { createStore, combineReducers, applyMiddleware } from "redux";
import * as home from "./home/reducer";
import * as solarTerms from "./solarTerms/reducer";
import thunk from "redux-thunk";
let store = createStore(combineReducers({ ...home,...solarTerms }), applyMiddleware(thunk));

export default store;
