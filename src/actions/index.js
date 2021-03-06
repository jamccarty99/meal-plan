import axios from "axios";

const ROOT_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/4632/summary";
const API_KEY = "M8Na5UOHF8mshxZEgTlYkp39uyb4p1boQEkjsnP4hmi8Gk0DmY"

export const FETCH_MEAL_PLAN = "FETCH_MEAL_PLAN";
export const FETCH_MEAL_DATA = "FETCH_MEAL_DATA"

export function fetchMealPlan(formData) {
  const exclusions = formData.exclude.replace(",","%2C+")
  const calories = formData.calories ? `&targetCalories=${formData.calories}`: ""
  const exclude = formData.exclude ? `&exclude=${exclusions}`:""
  const diet = formData.diet ? `&diet=${formData.diet}`:""
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?timeFrame=${formData.time}${diet}${exclusions}${calories}`
  console.log(url)
  const request = axios.get(url, {headers: { "X-Mashape-Authorization": API_KEY }})

  return {
    type: FETCH_MEAL_PLAN,
    payload: request
  };
}

export function fetchMealData(id) {
  const request = axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, {
      headers: { "X-Mashape-Authorization": API_KEY }
    })

  return {
    type: FETCH_MEAL_DATA,
    payload: request
  };
}
