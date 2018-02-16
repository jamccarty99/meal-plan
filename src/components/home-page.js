import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './home-page.css'
//import Header from './components/header'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      diet: '',
      exclude: '',
      calories: '',
      time: '',
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
    alert('Your meal is being planned!');

  }

  render() {
    return (
      <div className="search-form">
        <h1>Meal Plan Requests</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Day or Week:
            <select value={this.state.timeframe} onChange={this.handleTimeChange}>
              <option className="time" value="day">Day</option>
              <option className="time" value="week">Week</option>
            </select>
          </label>
          <label>
            Diet Type:
            <select value={this.state.diet} onChange={this.handleDietChange}>
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
            <input type="text" className="exclude" value={this.state.exclude} onChange={this.handleExcludeChange} />
          </label>
          <label>
            Target Calories:
            <input type="number" className="calories" value={this.state.calories} onChange={this.handleCaloriesChange} />
          </label>
          <button type="submit" className="btn btn-primary">Create Meal Plan</button>
        </form>
      </div>
    );
    console.log(this.diet);
  }
}

export default HomePage
