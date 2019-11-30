import React from "react"
import "../styles/MainDisplay.css"
import { useCategories } from "../hooks"
import { Link } from "react-router-dom"

const MainDisplay = props => {
  const { categories } = useCategories()
  return (
    <div className="main-container">
      {categories.map((cat, i) => (
        <div className="main" key={`main-cat-${i}`}>
          <Link to={`/${cat.slug}`}>
            <h2>{cat.name}</h2>
          </Link>
          <div className="links">
            {cat.children.map((sub, i) => (
              <Link to={`/${sub.slug}`} key={`sub-cat-${i}`}>
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainDisplay
