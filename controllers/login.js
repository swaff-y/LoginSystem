const express = require('express');
const router = express.Router();
const Login = require("../models/login");

router.get("/", async (req,res) => {
  res.render("login.ejs", { name: 'Kyle'});
})

module.exports = router
