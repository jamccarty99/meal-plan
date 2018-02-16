import React, { Component } from 'react'
import MealRecipe from './meal-recipe'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchMealPlan} from '../actions'
class SingleMeal extends Component {

  submit() {

    // We need to go and fetch weather data
    this.props.fetchMealPlan();
  }
  render() {
    return (
      <div className="container">
      <button className="btn btn-success" onClick={this.submit.bind(this)} >request data</button>
        <h2 className="text-center mb-5">Daily Meal Plan</h2>
        <h3 className="text-center mb-5">Info</h3>
        <div className="row">
          <div className="card-deck">
            {
              //map through each meal and render their respective single meal
              this.props.meals.map((meal, i) => {
                return (
                  <div key={i} className="card card-01">
                    <h3 className="card-header">{meal.title}</h3>
                    <img className="card-img-top" src={`https://spoonacular.com/recipeImages/${meal.image}`} alt={meal.title} />
                    <div className="card-body">
                      <span className="badge-box"><i className="fa fa-check"></i></span>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-default text-uppercase">Go to the recipe component</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
