import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SingleMeal from './single-meal'

export default class WeekMeal extends Component {
  render() {
    return (
      <div>
        <h1>Weekly Meal Plan</h1>
        <SingleMeal />
      </div>
    )
  }
}
