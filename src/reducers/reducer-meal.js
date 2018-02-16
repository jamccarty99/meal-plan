import { FETCH_MEAL_PLAN, FETCH_MEAL_DATA } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      const data = action.payload.data.meals.map((meal) => {
        return {
          title: meal.title,
          id: meal.id,
          image: null,
          readyInMinutes: null,
          instructions: null,
          extendedIngredients: []
        }
      })
      return state.concat(data);
    case FETCH_MEAL_DATA:
      const mealId = action.payload.data.id
      const stateCopy = state.slice()
      const updatedMeal = stateCopy.splice(state.findIndex(meal => meal.id==mealId),1)

      updatedMeal[0].image = action.payload.data.image
      updatedMeal[0].readyInMinutes = action.payload.data.readyInMinutes
      updatedMeal[0].instructions = action.payload.data.instructions
      updatedMeal[0].extendedIngredients.push(action.payload.data.extendedIngredients)

      console.log("updatedMeals",stateCopy.concat(updatedMeal))

  }
  return state;
}
