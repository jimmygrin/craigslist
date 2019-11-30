import React, { useState } from "react"
import { useCreatePost } from "../hooks"
import "../styles/PostForm.css"

const PostForm = props => {
  const create = useCreatePost()
  const [name, setName] = useState("")
  const [post, setPost] = useState("")
  const [url, setUrl] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    await create(props.match.params.slug, name, post, url)
    props.history.push(`/${props.match.params.slug}`)
  }

  return (
    <div>
      <h1>Submit Post to /{props.match.params.slug}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Post Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="post">Post Content</label>
        <br />
        <textarea
          name="post"
          id="post"
          value={post}
          onChange={event => setPost(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="url">Post Image Url</label>
        <br />
        <input
          type="url"
          name="url"
          id="url"
          value={url}
          onChange={event => setUrl(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostForm