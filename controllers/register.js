const express = require('express');
const router = express.Router();
const Register = require("../models/Register");

router.get("/", async (req,res) => {
  res.render("register.ejs", { name: 'Kyle'});
})

router.post("/", async (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
})

module.exports = router
