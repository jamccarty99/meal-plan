import { FETCH_MEAL_PLAN, FETCH_MEAL_DATA } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      const data = action.payload.data.meals.map((meal) => {
        return {
          title: meal.title,
          id: meal.id,
          image: meal.image,
          readyInMinutes: meal.readyInMinutes
        }
      })
      return state.concat(data);
    case FETCH_MEAL_DATA:
      const mealId = action.payload.data.id
      const updatedMeal = state.find(meal => meal.id = mealId)
      updatedMeal.image=action.payload.data.image
      updatedMeal.instructions=action.payload.data.instructions
      updatedMeal.extendedIngredients = action.payload.data.extendedIngredients
      updatedMeal.readyInMinutes = action.payload.data.readyInMinutes
      console.log(updatedMeal,state)
      return state
  }
  return state;
}
