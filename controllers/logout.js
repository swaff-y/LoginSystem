const express = require('express');
const router = express.Router();
const passport = require('passport');
const Logout = require("../models/logout");

router.delete("/", checkAuthenticated, (req,res) => {
  req.logOut();
  res.redirect('/login');
})

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login')
}

module.exports = router
