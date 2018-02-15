//import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
//import {  } from "../actions";

class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Create Meal Plan
          </Link>
        </div>
        <h3>Recipes</h3>
        <ul className="list-group">
        </ul>
      </div>
    );
  }
}


export default HomePage
