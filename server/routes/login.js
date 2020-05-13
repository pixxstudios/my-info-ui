const loginRoute = require('express').Router();
const { User } = require('../schemas/schemas');

loginRoute.get('/login', (req, res) => {
    const user = new User({
        username: 'Gagan',
        password: '123'
    });

    user.save()
    .then(response => {
        res.status(200).json({
            message: 'Login successful'
        });
    })
    .catch(error => {
        res.status(400).json({
            error
        });
    });
});

module.exports = loginRoute;
