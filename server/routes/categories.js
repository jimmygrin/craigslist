const router = require("express").Router()
const db = require("../db")

router.get("/", (request, response, next) => {
  const sql = `
  SELECT name,id, slug, parent_id
  FROM categories 
  `

  db.query(sql, (error, results, fields) => {
    let filtered = results.filter(cat => cat.parent_id === null)
    filtered = filtered.map(cat => {
      const children = results.filter(child => child.parent_id === cat.id)
      return { ...cat, children: children }
    })

    response.json(filtered)
  })
})

module.exports = router
