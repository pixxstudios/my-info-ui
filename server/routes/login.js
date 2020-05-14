const loginRoute = require('express').Router();
const { User } = require('../schemas/schemas');

loginRoute.get('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email.trim().length || !password.trim().length) {
        res.status(422).json({
            error: 'Email and password cannot be empty'
        });
    }

    User.findOne({ email })
    .then(response => {
        console.log('response ', response);
    })
    .catch(err => {
        res.status(400).send(err);
    })
});

module.exports = loginRoute;
