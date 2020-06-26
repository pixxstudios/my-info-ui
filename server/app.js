const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('./db.config');

const {
    loginRoute,
    registerRoute,
    fileUploadRoute
} = require('./routes/routes');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(passport.initialize());
app.use(passport.session());

// handle different routes
app.use(loginRoute);
app.use(registerRoute);
app.use(fileUploadRoute);

app.use('*', (req, res) => {
    res.status(404).send('invalid url')
});

module.exports = app;