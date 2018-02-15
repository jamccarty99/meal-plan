import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { fetchMealPlan } from "../actions";

class HomePage extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onFormSubmit(event) {
      event.preventDefault();

      this.props.fetchMealPlan();
    }

  render() {
    return (
      <form onFormSubmit={this.onFormSubmit.bind(this)}>
        <Field
          label="Type of Diet"
          name="diet"
          component={this.renderField}
        />
        <Field
          label="Food Exclusions"
          name="exclude"
          component={this.renderField}
        />
        <Field
          label="Target Calories"
          name="calories"
          component={this.renderField}
        />
        <Field
          label="Day or Week"
          name="timeframe"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit Search</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}


export default HomePage
