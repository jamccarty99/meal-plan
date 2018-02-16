import React, { Component } from 'react'
import SingleMeal from './single-meal'
import { connect } from "react-redux"

class MealRecipe extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const meal = this.props.meals[1] || {title:"",instructions:""}
    return (
      <div className="container recipe">
        <h3 className="d-flex justify-content-center align-content-center mb-5">{meal.title}</h3>
        <div className="d-flex justify-content-center align-content-center mb-5"> <img src={meal.image}></img></div>
        <ul>
          {
            meal.extendedIngredients[0].map(i => (<li key={i.id}>

              {i.originalString}

            </li>))
          }
        </ul>
        <h4>Instructions:</h4>
        <p className="d-flex justify-content-center align-content-center mb-5">{meal.instructions}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { meals: state.meals };
}


export default connect(mapStateToProps)(MealRecipe);
