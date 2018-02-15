import { FETCH_MEAL_PLAN } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      console.log(action.payload)
      const data = action.payload.data.meals.map((meal) => {
        return {
          title: meal.title,
          id: meal.id,
          image: meal.image,
          readyInMinutes: meal.readyInMinutes}
      })

      // const data = {
      //   title: title,
      //   id: id,
      //   image: image,
      //   readyInMinutes: readyInMinutes
      // }

      console.log(data)
      debugger
      return state.concat(data);
      
  }
  return state;
}
