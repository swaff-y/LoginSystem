const express = require('express');
const router = express.Router();
const Register = require("../models/Register");

router.get("/", async (req,res) => {
  res.render("register.ejs", { name: 'Kyle'});
})

router.post("/", async (req,res) => {
  
})

module.exports = router
