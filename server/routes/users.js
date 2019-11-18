const router = require("express").Router()
const axios = require("axios")
const db= require("../db")

const community = []

router.get("/", (req, res, next) => {
  const sql =
  `
  SELECT name, id FROM categories WHERE parent_id=1
  `
  db.query(sql, (err,results,fields)=>{
    res.json(results)
  })
})
module.exports = router