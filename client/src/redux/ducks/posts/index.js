import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_POSTS = "posts/GET_POSTS"
const GET_SINGLE_POST = "posts/GET_SINGLE_POST"

const initialState = {
  posts: [],
  currentPost: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case GET_SINGLE_POST:
      return { ...state, currentPost: action.payload }
    default:
      return state
  }
}

const getPosts = slug => {
  return dispatch => {
    axios.get("/posts/" + slug).then(response => {
      dispatch({
        type: GET_POSTS,
        payload: response.data
      })
    })
  }
}

const getSinglePost = postId => {
  return dispatch => {
    axios.get("/posts/single/" + postId).then(response => {
      dispatch({
        type: GET_SINGLE_POST,
        payload: response.data[0]
      })
    })
  }
}

// const createPost = () => {
//   const create = (slug, name, post) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .post("/", { slug, name, post })
//         .then(response => {
//           resolve()
//         })
//         .catch(event => {
//           reject()
//         })
//     })
//   }
//   return create
// }

export const usePosts = slug => {
  const posts = useSelector(appState => appState.postState.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts(slug))
  }, [dispatch, slug])

  return posts
}

export const usePost = postId => {
  const post = useSelector(appState => appState.postState.currentPost)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSinglePost(postId))
  }, [dispatch, postId])

  return post
}

export const useCreatePost = () => {
  const create = (slug, name, post, url) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/posts", { slug, name, post, url })
        .then(response => {
          resolve()
        })
        .catch(event => {
          reject()
        })
    })
  }

  return create
}