import React, { Component } from 'react'
import MealRecipe from './meal-recipe'
import {fetchMealPlan} from '../actions'

export default class Test extends Component {
  submit() {

    // We need to go and fetch weather data
    fetchMealPlan();
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center mb-5">Test API request</h3>
        <button className="btn btn-success" onClick={this.submit} >request data</button>
      </div>
    )
  }
}
