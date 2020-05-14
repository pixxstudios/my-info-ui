require('dotenv').config();
const loginRoute = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require('../schemas/schemas');

loginRoute.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email.trim().length || !password.trim().length) {
        res.status(422).json({
            error: 'Email and password cannot be empty'
        });
    }

    User.findOne({ email })
    .then(response => {
        const { _id } = response;
        const token = jwt.sign({ id: _id }, process.env.TOKEN_SECRET);
        res.status(200).json({
            authToken: token
        });
    })
    .catch(err => {
        res.status(400).send(err);
    })
});

module.exports = loginRoute;
