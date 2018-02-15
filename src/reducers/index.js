import { combineReducers } from "redux";
import MealReducer from "./reducer-meal";

const rootReducer = combineReducers({
  meals: MealReducer
});

export default rootReducer;
