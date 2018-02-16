import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './home-page.css'
import MealRecipe from './meal-recipe'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchMealPlan, fetchMealData} from '../actions'



class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 'Day',
      diet: '',
      exclude: '',
      calories: null
    }

    this.handleDietChange = this.handleDietChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDietChange(event) {
    this.setState({diet: event.target.value});
  }
  handleExcludeChange(event) {
    console.log(event.target.value);
    this.setState({exclude: event.target.value});
  }
  handleCaloriesChange(event) {
    this.setState({calories: event.target.value});
  }
  handleTimeChange(event) {
    this.setState({time: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.fetchMealPlan(this.state).then(response => {
      const meals = this.props.meals
      for (let i=0;i<meals.length;i++) {
        this.props.fetchMealData(meals[i].id)
      }
    }).then(()=>this.props.history.push("/day"))
  }

  render() {
    return (
      <div className="container search-form">
        <h1 className="text-center">Meal Plan Requests</h1>
        <form className="form-horizontal" >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Day/Week:</label>
              <div className="col-sm-10">
                <select className="form-control mt-1" value={this.state.time} onChange={this.handleTimeChange}>
                  <option className="time" value="day">Day</option>
                  <option className="time" value="week">Week</option>
                </select>
              </div>
            <label className="col-sm-2 col-form-label">Diet Type:</label>
              <div className="col-sm-10">
                <select className="form-control mt-3 mb-2" value={this.state.diet} onChange={this.handleDietChange}>
                  <option className="diet" value="none">None</option>
                  <option className="diet" value="vegetarian">Vegetarian</option>
                  <option className="diet" value="vegan">Vegan</option>
                  <option className="diet" value="glutenFree">Gluten Free</option>
                  <option className="diet" value="dairyFree">Dairy Free</option>
                  <option className="diet" value="veryHealthy">Very Healthy</option>
                  <option className="diet" value="cheap">Cheap</option>
                  <option className="diet" value="veryPopular">Very Popular</option>
                  <option className="diet" value="sustainable">Sustainable</option>
                  <option className="diet" value="lowFodmap">Low Fodmap</option>
                  <option className="diet" value="ketogenic">Ketogenic</option>
                  <option className="diet" value="whole30">Whole 30</option>
                </select>
              </div>
            <label className="col-sm-2 col-form-label">Food Exclusions:</label>
              <div className="col-sm-10">
                <input type="text" placeholder="A comma-separated list of ingredients." className="exclude" value={this.state.exclude} onChange={this.handleExcludeChange} />
              </div>
            <label className="col-sm-2 col-form-label">Target Calories:</label>
              <div className="col-sm-10">
                <input type="number" placeholder="Your target number of calories."className="calories" value={this.state.calories ? this.state.calories: ""} onChange={this.handleCaloriesChange} />
              </div>
            <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Create Meal Plan</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { meals: state.meals };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMealPlan, fetchMealData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
