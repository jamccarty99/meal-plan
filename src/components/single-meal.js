import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MealRecipe from './meal-recipe'

export default class SingleMeal extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center mb-5">Daily Meal Plan</h3>
        <h3 className="text-center mb-5">Info</h3>
        <div className="row">
          <div className="card-deck">
            {
              //map through each meal and render their respective single meal
            }
            <MealRecipe  />
          </div>
        </div>
      </div>
    )
  }
}
