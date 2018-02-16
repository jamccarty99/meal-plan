import axios from "axios";

const ROOT_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/4632/summary";
const API_KEY = "M8Na5UOHF8mshxZEgTlYkp39uyb4p1boQEkjsnP4hmi8Gk0DmY"

export const FETCH_MEAL_PLAN = "FETCH_MEAL_PLAN";

export function fetchMealPlan() {
  const request = axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day', {
      headers: { "X-Mashape-Authorization": API_KEY }
    })

  return {
    type: FETCH_MEAL_PLAN,
    payload: request
  };
}
