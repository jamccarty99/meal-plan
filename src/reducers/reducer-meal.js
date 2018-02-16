import { FETCH_MEAL_PLAN, FETCH_MEAL_DATA } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      if (action.payload.data.meals) {
        const data = action.payload.data.meals.map((meal) => {
          return {
            day: 1,
            title: meal.title,
            id: meal.id,
            image: null,
            readyInMinutes: null,
            instructions: null,
            extendedIngredients: []
          }
        })
        return state.concat(data);
      } else {
        const data = action.payload.data.items.map((meal) => {
            return {
              day: meal.day,
              title: JSON.parse(meal.value).title,
              id: JSON.parse(meal.value).id,
              image: null,
              readyInMinutes: null,
              instructions: null,
              extendedIngredients: []
            }
          })
        const newState = state.concat(data);
        console.log(newState)
        return newState
        }
    case FETCH_MEAL_DATA:
          const mealId = action.payload.data.id
          const stateCopy = state.slice()
          const updatedMeal = stateCopy.splice(state.findIndex(meal => meal.id == mealId), 1)

          updatedMeal[0].image = action.payload.data.image
          updatedMeal[0].readyInMinutes = action.payload.data.readyInMinutes
          updatedMeal[0].instructions = action.payload.data.instructions
          updatedMeal[0].extendedIngredients.push(action.payload.data.extendedIngredients)

          const newState = stateCopy.concat(updatedMeal)
          console.log(newState)
          return newState

      }
      return state;
  }
