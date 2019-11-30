import React from "react"
import MainDisplay from "./MainDisplay"
import Posts from "./PostList"
import CreatePost from "./PostForm"
import Post from "./ViewPost"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainDisplay} />
          <Route exact path="/:slug" component={Posts} />
          <Route exact path="/:slug/post" component={CreatePost} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  )
}

export default App