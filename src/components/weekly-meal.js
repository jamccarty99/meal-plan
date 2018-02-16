import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchMealPlan, fetchMealData } from '../actions'
import SingleMeal from './single-meal'
import { Link } from "react-router-dom";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/fontawesome-pro-regular'
import {faTrashAlt} from '@fortawesome/fontawesome-pro-regular'

class WeekMeal extends Component {
  constructor(props) {
    super(props);

  }


  compare = (a,b) => {
    if (a.last_nom < b.last_nom)
      return -1;
    if (a.last_nom > b.last_nom)
      return 1;
    return 0;
  }


  render() {
    return (
      <div>
        {console.log('Weekly', this.props)}
        {
          // console.log(this.props.meal.sort(this.compare)
          alert(JSON.stringify(this.props.meals.sort((a, b) => {
            const nameA = Object.keys(a)[0];
            const nameB = Object.keys(b)[0];

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })))
      }
        <h1>Weekly Meal Plan</h1>

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

export default connect(mapStateToProps, mapDispatchToProps)(WeekMeal);
