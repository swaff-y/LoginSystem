require("dotenv").config();

const express = require('express');
const app = express();

//tell server we are using ejs
app.set('view-engine', 'ejs')

//Use fields from forms and send it to posts
app.use(express.urlencoded({ extended: false }))

app.listen(3000);

//controllers
app.use('/', require("./controllers/index"));
app.use('/login', require("./controllers/login"));
app.use('/register', require("./controllers/register"));
