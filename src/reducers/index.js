import { createStore, combineReducers } from "redux";
import MealReducer from "./reducer-meal";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  meals: MealReducer,
  form: formReducer
});

export default rootReducer;
