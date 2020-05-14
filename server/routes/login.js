require('dotenv').config();
const loginRoute = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
    User
} = require('../schemas/schemas');

loginRoute.post('/login', (req, res, next) => {
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
                        }, process.env.TOKEN_SECRET);
                        res.status(200).json({
                            authToken: token
                        });
                    }
                })
                .catch(err => console.log('error ', err));
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = loginRoute;