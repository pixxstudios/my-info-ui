const userRoutes = require('express').Router();

userRoutes.get('/login', (req, res) => {
    res.send('login success');
});

module.exports = userRoutes;
