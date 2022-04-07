import initialState from "../store"
import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions"

export default function favouritesReducer(
  state = initialState.favourites,
  action
) {
  const { type, payload } = action

  switch (type) {
    case ADD_TO_FAV:
      return {
        ...state,
        items: [...state.items, payload],
      }
    case REMOVE_FROM_FAV:
      return {
        ...state,
        items: state.items.filter(company => company !== payload),
      }
    default:
      return state
  }
}
