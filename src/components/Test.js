import React, { Component } from 'react'
import MealRecipe from './meal-recipe'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchMealPlan, fetchMealData} from '../actions'

class Test extends Component {
  submit() {

    // We need to go and fetch weather data
    this.props.fetchMealPlan().then(response => {
      const meals = response.payload.data.meals
      for (let i=0;i<meals.length;i++) {
        this.props.fetchMealData(meals[i].id)
        console.log(meals[i].id)
      }
    })
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
  return bindActionCreators({ fetchMealPlan, fetchMealData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
