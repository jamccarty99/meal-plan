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
    const { handleSubmit } = this.props;

    return (
      <form onFormSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
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
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMealPlan }, dispatch);
}

const homePage = reduxForm({
  form: 'searchForm'
})(HomePage);

export default connect(null, mapDispatchToProps)(homePage);
