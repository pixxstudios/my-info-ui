const userRoutes = require('express').Router();
const { User } = require('../schemas/schemas');

userRoutes.get('/login', (req, res) => {
    const user = new User({
        username: 'Gagan',
        password: '123'
    });
    user.save()
    .then(response => {
        console.log('response ', response);
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

userRoutes.post('/register', (req, res) => {
    console.log(req.body);
    res.send('register');
});

module.exports = userRoutes;
