import { initialState } from "../store"
import { FETCH_JOBS_SUCCESS } from "../actions"

export default function jobsReducer(state = initialState.jobs, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: payload,
      }
    default:
      return state
  }
}
