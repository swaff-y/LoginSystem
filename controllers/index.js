const express = require('express');
const router = express.Router();
const Index = require("../models/index");

router.get("/", checkAuthenticated, (req,res) => {
  res.render("index.ejs", { name: req?.user?.name });
})

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login')
}

module.exports = router
