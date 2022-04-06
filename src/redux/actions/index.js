export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToFavoritesAction = (company) => ({
  type: ADD_TO_FAVORITES,
  payload: company,
})

export const removeFromFavoritesAction = (company) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: company,
})


