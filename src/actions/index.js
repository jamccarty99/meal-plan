import axios from "axios";

const axios = require('axios');
const ROOT_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/4632/summary";
const API_KEY = "M8Na5UOHF8mshxZEgTlYkp39uyb4p1boQEkjsnP4hmi8Gk0DmY"

export const FETCH_MEAL_PLAN = "FETCH_MEAL_PLAN";

export function fetchMealPlan() {
  const request = axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day', {
    headers: {
      "X-Mashape-Authorization": API_KEY
    }
  })
  console.log(request)

  return {
    type: FETCH_MEAL_PLAN,
    payload: response.data
  };
}


// .then(response => {
//   console.log("meal plan", response.data)
//   const meals = response.data.meals;
//   for (let i = 0; i < meals.length; i++) {
//     const id = meals[i].id
//     axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, {
//       headers: {
//         "X-Mashape-Authorization": API_KEY
//       }
//     }).then(response => {
//         this.addMeal(response.data)
//         console.log(response.data)
//         this.meals = this.getMeals()
//     })
//   }
// }
// ).catch(error => {
//   console.error(error)
// })
// }
