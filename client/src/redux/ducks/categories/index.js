import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CATEGORIES = "craigslist/GET_CATEGORIES"

const initialState = {
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}

const getCategories = () => {
  return dispatch => {
    axios.get("/categories").then(response => {
      dispatch({
        type: GET_CATEGORIES,
        payload: response.data
      })
    })
  }
}

export const useCategories = () => {
  const categories = useSelector(appState => appState.categoryState.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return { categories }
}