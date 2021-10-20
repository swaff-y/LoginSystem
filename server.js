if(process.env.NODE_ENV !== 'production'){
  require("dotenv").config();
}

const express = require('express');
const app = express();

const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')
const users = require('./data');

const methodOverride = require("method-override");

const initializePassport = require('./passportConfig');
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);

//tell server we are using ejs
app.set('view-engine', 'ejs')

//Use fields from forms and send it to posts
app.use(express.urlencoded({ extended: false }))

//Flash and session
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

//passport
app.use(passport.initialize())
app.use(passport.session())

//method-override
app.use(methodOverride('_method'));

app.listen(3000);

//controllers
app.use('/', require("./controllers/index"));
app.use('/login', require("./controllers/login"));
app.use('/logout', require("./controllers/logout"));
app.use('/register', require("./controllers/register"));
