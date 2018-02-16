import React, { Component } from 'react'
import MealRecipe from './meal-recipe'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchMealPlan, fetchMealData } from '../actions'
import { Link } from "react-router-dom";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/fontawesome-pro-regular'
import {faTrashAlt} from '@fortawesome/fontawesome-pro-regular'
class SingleMeal extends Component {

  submit() {

    // We need to go and fetch meal data
    this.props.fetchMealPlan().then(response => {
      const meals = this.props.meals
      for (let i=0;i<meals.length;i++) {
        this.props.fetchMealData(meals[i].id)
      }
    })
  }

  render() {
    return (
      <div className="container">
      {console.log('single meal', this.props)}
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
                    <img className="card-img-top" src={meal.image} alt={meal.title} />
                    <div className="card-body">
                      <span className="badge-box"> <FontAwesomeIcon className="fa" icon={faUtensils} /> </span>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/recipe" className="btn btn-default text-uppercase">Go to the recipe component</a>
                      <Link to={"/recipe"} className="btn btn-default text-uppercase">Recipe</Link>
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
  return bindActionCreators({ fetchMealPlan , fetchMealData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
