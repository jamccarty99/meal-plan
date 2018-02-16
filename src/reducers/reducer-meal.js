import { FETCH_MEAL_PLAN } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      console.log(action.payload)
      const data = action.payload.map((meal) => {
        return {
          title: meal.data.title,
          id: meal.data.id,
          image: meal.data.image,
          readyInMinutes: meal.data.readyInMinutes}
      })
      console.log(data)
      return state.concat(data);

  }
  return state;
}
