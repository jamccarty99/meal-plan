import React, { Component } from 'react'
import SingleMeal from './single-meal'
import { connect } from "react-redux"

class MealRecipe extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center mb-5">{this.props.meals[1].title}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { meals: state.meals };
}


export default connect(mapStateToProps)(MealRecipe);
