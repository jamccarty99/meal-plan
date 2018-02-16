import { FETCH_MEAL_PLAN } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      const data = action.payload.data.meals.map((meal) => {
        return {
          title: meal.title,
          id: meal.id,
          image: meal.image,
          readyInMinutes: meal.readyInMinutes}
      })
      return state.concat(data);
  }
  return state;
}
