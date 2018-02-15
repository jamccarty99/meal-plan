import { combineReducers } from "redux";
import mealReducer from "./reducer-meal";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  meals: mealReducer,
  form: formReducer
});

export default rootReducer;
