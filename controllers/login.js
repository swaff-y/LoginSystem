const express = require('express');
const router = express.Router();
const passport = require('passport');
const Login = require("../models/login");

router.get("/", async (req,res) => {
  res.render("login.ejs", { name: 'Kyle'});
})

router.post("/", passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
} ))

module.exports = router
