const express = require('express');
const router = express.Router();
const passport = require('passport');
const Login = require("../models/login");

router.get("/", checkNotAuthenticated, async (req,res) => {
  res.render("login.ejs", { name: 'Kyle'});
})

router.post("/", passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
} ))

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return res.redirect('/')
  }
  next();
}

module.exports = router
