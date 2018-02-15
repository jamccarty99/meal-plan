import React, { Component } from 'react'
import MealRecipe from './meal-recipe'

export default class Test extends Component {
  render() {
    return (
      <div className="container">
      <h3 className="text-center mb-5">Test API request</h3>
      <button className="btn btn-success" >request data</button>
      </div>
    )
  }
}