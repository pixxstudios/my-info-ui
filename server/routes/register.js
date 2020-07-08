const registerRoute = require('express').Router();
const bcrypt = require('bcrypt');
const {
    User
} = require('../models/model');

const SALT_ROUNDS = 10;

registerRoute.post('/register', async (req, res, next) => {
    try {
        let password = req.body.password;

        // encrypt the password
        password = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await User.create({
            email: req.body.email,
            password
        });
        res.status(200).json({ email: user.email });
    }
    catch(err) {
        res.status(400).send(err);
    }
});

module.exports = registerRoute;