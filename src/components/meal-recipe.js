import React, { Component } from 'react'
import SingleMeal from './single-meal'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class MealRecipe extends Component {
  constructor(props) {
    super(props)

    console.log("recipe props",props)

  }

  render() {
    // loads an empty meal on start to avoid compiling issues
    const meal = this.props.meals.find(meal => meal.id == parseInt(this.props.match.params.id,10)) || {title:"",instructions:"",image:"",extendedIngredients:[[]]}
    console.log("recipe",meal)
    return (
      <div className="container recipe">
        <h3 className="d-flex justify-content-left"><Link className="navigation-link fa fa-comments" to="/day">Back</Link></h3>
        <h3 className="d-flex justify-content-center align-content-center mb-5">{meal.title}</h3>
        <div className="d-flex justify-content-center align-content-center mb-5"> <img src={meal.image}></img></div>
        <h4 className="d-flex mb-2">Ingredients:</h4>
        <ul>
          {
            meal.extendedIngredients[0].map(i => (<li key={i.id}>

              {i.originalString}

            </li>))
          }
        </ul>
        <h4>Instructions:</h4>
        <p className="d-flex justify-content-center align-content-center mb-2">{meal.instructions}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { meals: state.meals };
}


export default connect(mapStateToProps)(MealRecipe);
