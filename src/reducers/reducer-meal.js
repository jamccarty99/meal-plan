import { FETCH_MEAL_PLAN } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEAL_PLAN:
      const title = action.payload.data.title
      const id = action.payload.data.id
      const image = action.payload.data.image
      const readyInMinutes = action.payload.data.readyInMinutes
      const data = {
        title: title,
        id: id,
        image: image,
        readyInMinutes: readyInMinutes
      }
      console.log(data)
      return state.concat([data]);
  }
  return state;
}
