import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions'
import { initialState } from '../store'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          companies: [...state.favorites.companies, action.payload],
        },
      }

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          companies: state.favorites.companies.filter(
            (company, i) => i !== action.payload
          ),
        },
      }

    default:
      return state
  }
}

export default reducer
