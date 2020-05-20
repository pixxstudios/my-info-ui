require('dotenv').config();
const loginRoute = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');
require('../services/passport');
const {
    User
} = require('../schemas/schemas');

const requireSignIn = passport.authenticate('local', { session: false });

loginRoute.get('/test', (req, res) => {
    res.status(200).send('working fine...');
});

loginRoute.post('/login', requireSignIn,  (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email.trim().length || !password.trim().length) {
        res.status(422).json({
            error: 'Email and password cannot be empty'
        });
    }

    User.findOne({
            email
        })
        .then(response => {
            // check if email exists
            if (!response) {
                res.status(422).json({
                    error: 'Invalid email'
                });
                return next();
            }

            // check the password
            bcrypt.compare(password, response.password)
                .then(passwordMatch => {
                    if (passwordMatch) {
                        // send the jwt token back to client
                        const {
                            _id
                        } = response;
                        const token = jwt.sign({
                            id: _id
                        }, process.env.TOKEN_SECRET,
                        { expiresIn: '18000s' });
                        res.status(200).json({
                            token
                        });
                    }
                })
                .catch(err => console.log('error ', err));
        })
        .catch(err => {
            res.status(400).send('error');
        })
});

module.exports = loginRoute;