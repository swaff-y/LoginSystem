const express = require('express');
const router = express.Router();
const Register = require("../models/Register");
const data = require("../data");
const bcrypt = require('bcrypt');

router.get("/", async (req,res) => {
  res.render("register.ejs", { name: 'Kyle'});
})

router.post("/", async (req,res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    data.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login');
  } catch ( err ) {
    res.redirect('/');
  }
  console.log(data);
})

module.exports = router
