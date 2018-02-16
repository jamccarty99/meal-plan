import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SingleMeal from './single-meal'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/fontawesome-pro-regular'
import {faTrashAlt} from '@fortawesome/fontawesome-pro-regular'

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
