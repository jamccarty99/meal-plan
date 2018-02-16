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
      diet: 'None',
      exclude: '',
      calories: undefined
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
    this.props.fetchMealPlan().then(response => {
      const meals = this.props.meals
      for (let i=0;i<meals.length;i++) {
        this.props.fetchMealData(meals[i].id)
      }
    })
  }

  render() {
    return (
      <div id="search-form">
        <h1>Meal Plan Requests</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Day/Week:
            <select className="form-control" value={this.state.time} onChange={this.handleTimeChange}>
              <option className="time" value="day">Day</option>
              <option className="time" value="week">Week</option>
            </select>
          </label>
          <label className="control-label">
            Diet Type:
            <select className="form-control" value={this.state.diet} onChange={this.handleDietChange}>
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
          </label>
          <label>
            Food Exclusions:
            <input type="text" placeholder="A comma-separated list of ingredients." className="exclude" value={this.state.exclude} onChange={this.handleExcludeChange} />
          </label>
          <label>
            Target Calories:
            <input type="number" placeholder="Your target number of calories." className="calories" value={this.state.calories} onChange={this.handleCaloriesChange} />
          </label>

          <button type="submit" className="btn btn-primary">Create Meal Plan</button>
        </form>
        <form>
//   <div class="form-group row">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
//     </div>
//   </div>
//   <div class="form-group row">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
//     </div>
//   </div>
//   <fieldset class="form-group">
//     <div class="row">
//       <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
//       <div class="col-sm-10">
//         <div class="form-check">
//           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
//           <label class="form-check-label" for="gridRadios1">
//             First radio
//           </label>
//         </div>
//         <div class="form-check">
//           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
//           <label class="form-check-label" for="gridRadios2">
//             Second radio
//           </label>
//         </div>
//         <div class="form-check disabled">
//           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
//           <label class="form-check-label" for="gridRadios3">
//             Third disabled radio
//           </label>
//         </div>
//       </div>
//     </div>
//   </fieldset>
//   <div class="form-group row">
//     <div class="col-sm-2">Checkbox</div>
//     <div class="col-sm-10">
//       <div class="form-check">
//         <input class="form-check-input" type="checkbox" id="gridCheck1">
//         <label class="form-check-label" for="gridCheck1">
//           Example checkbox
//         </label>
//       </div>
//     </div>
//   </div>
//   <div class="form-group row">
//     <div class="col-sm-10">
//       <button type="submit" class="btn btn-primary">Sign in</button>
//     </div>
//   </div>
// </form>

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
