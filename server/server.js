const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require('./db.config');

const {
    loginRoute,
    registerRoute
} = require('./routes/routes');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(loginRoute);
app.use(registerRoute);

app.get('/', (req, res) => {
    res.send('hey');
});

app.use('*', () => {
    res.status(404).send('invalid url')
});

app.listen(9001, () => {
    console.log('Listening at port 9001');
});