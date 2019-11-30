import React from "react"
import { usePost } from "../hooks"
import "../styles/ViewPost.css"

const ViewPost = props => {
  const post = usePost(props.match.params.id)
  return (
    <>
      <button onClick={event => props.history.goBack()}>&larr;</button>
      <div>
        <h1>Title: {post.name}</h1>
        <p>{post.post}</p>
        {post.image_url ? <img src={`${post.image_url}`} alt={post.name} className="post-images" /> : ''}
      </div>
    </>
  )
}

export default ViewPost