export const ADD_TO_FAV = "ADD_TO_FAV"
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS"

export const addToFav = company => ({
  type: ADD_TO_FAV,
  payload: company,
})

export const removeFromFav = company => ({
  type: REMOVE_FROM_FAV,
  payload: company,
})

export const fetchJobs = (url, query) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(url + query)
      if (res.ok) {
        const { data } = await res.json()
        dispatch({
          type: FETCH_JOBS_SUCCESS,
          payload: data,
        })
      } else {
        throw new Error("Something went wrong")
      }
    } catch (err) {
      console.log(err)
    }
  }
}
