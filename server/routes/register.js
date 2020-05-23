const registerRoute = require('express').Router();
const bcrypt = require('bcrypt');
const {
    User
} = require('../schemas/schemas');

const SALT_ROUNDS = 10;

registerRoute.post('/register', async (req, res, next) => {
    console.log(req.body);
    let password = req.body.password;
    const email = req.body.email;

    if (!email.trim().length || !password.trim().length) {
        return res.status(422).json({
            error: 'Email and password cannot be empty'
        });
    }

    // encrypt the password
    bcrypt.hash(password, SALT_ROUNDS)
        .then(hash => {
            password = hash;

            const user = new User({
                email,
                password
            });

            // check if user exists
            User.findOne({
                    email
                })
                .then(response => {
                    if (response !== null) {
                        res.status(200).json({
                            error: 'Email already exists.'
                        });
                    } else {
                        // save user in db
                        user.save()
                            .then(() => {
                                res.status(200).json({
                                    message: 'Register successful'
                                });
                            })
                            .catch(error => {
                                res.status(400).json({
                                    error
                                });
                            });
                    }
                });
        });
});

module.exports = registerRoute;