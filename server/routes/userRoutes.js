const userRoutes = require('express').Router();

userRoutes.get('/login', (req, res) => {
    res.send('login success');
});

userRoutes.post('/register', (req, res) => {
    console.log(req.body);
    res.send('register');
});

module.exports = userRoutes;
