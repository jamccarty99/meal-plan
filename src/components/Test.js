import React, { Component } from 'react'
import MealRecipe from './meal-recipe'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchMealPlan} from '../actions'

class Test extends Component {
  submit() {

    // We need to go and fetch weather data
    this.props.fetchMealPlan();
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center mb-5">Test API request</h3>
        <button className="btn btn-success" onClick={this.submit.bind(this)} >request data</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { meals: state.meals };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMealPlan }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);