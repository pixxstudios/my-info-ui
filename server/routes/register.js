const registerRoute = require('express').Router();
const { User } = require('../schemas/schemas');

registerRoute.get('/register', (req, res) => {
    const user = new User({
        username: 'Gagan',
        password: '123'
    });
    user.save()
    .then(response => {
        console.log('response ', response);
        res.status(200).json({
            message: 'Register successful'
        });
    })
    .catch(error => {
        res.status(400).json({
            error
        });
    });
});

module.exports = registerRoute;
