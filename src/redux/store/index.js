import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import favouritesReducer from "../reducers/favourites"
import jobsReducer from "../reducers/jobs"

export const initialState = {
  favourites: {
    items: [],
  },
  jobs: {
    items: [],
  },
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
})

export default createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)
