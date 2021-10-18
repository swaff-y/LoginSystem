const express = require('express');
const router = express.Router();
const Register = require("../models/Register");
const data = require("../data");

router.get("/", async (req,res) => {
  res.render("register.ejs", { name: 'Kyle'});
})

router.post("/", async (req,res) => {
  const sendObj = {
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
  }
  data.push(sendObj);
  console.log(data[1].name);
})

module.exports = router
