const express = require('express');
const router = express.Router();
const Index = require("../models/index");

router.get("/", async (req,res) => {
  res.render("index.ejs", { name: 'Kyle'});
})

module.exports = router
