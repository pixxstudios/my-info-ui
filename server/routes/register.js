const registerRoute = require('express').Router();
const brcypt = require('bcrypt');
const { User } = require('../schemas/schemas');

const saltRounds = 10;

registerRoute.post('/register', (req, res) => {
    const user = new User({
        username: 'Gagan',
        password: '123'
    });

    brcypt.hash('123', saltRounds, (err, hash) => {
        console.log('hashed password ', hash);
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
