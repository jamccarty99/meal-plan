import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import Header from "./components/header"

import rootReducers from "./reducers";
import HomePage from "./components/home-page";
import SingleMeal from './components/single-meal'
import Test from './components/Test'

import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}>
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route path="/test" component={Test} />
            <Route path="/meals" component={SingleMeal} />
            <Route path="/" component={HomePage} />
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
