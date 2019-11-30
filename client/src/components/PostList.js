import React from "react"
import { usePosts } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/PostList.css"

const PostList = props => {
  const posts = usePosts(props.match.params.slug)

  return (
    <>
      <header>
        <h1>{props.match.params.slug} Posts</h1>
        <Link to={`/${props.match.params.slug}/post`}>Add Post</Link>
      </header>
      <div className="posts">
        {posts.map((post, i) => (
          <p key={i}>
            <Link to={`/post/${post.id}`}>{post.name}</Link>
          </p>
        ))}
      </div>
    </>
  )
}

export default PostList