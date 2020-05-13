const registerRoute = require('express').Router();
const bcrypt = require('bcrypt');
const {
    User
} = require('../schemas/schemas');

const saltRounds = 10;

registerRoute.post('/register', async (req, res) => {
    let password = req.body.password;
    const email = req.body.email;

    // encrypt the password
    bcrypt.hash(password, saltRounds)
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
                            message: 'Email already exists.'
                        });
                    } else {
                        // save user in db
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
                    }
                });
        });
});

module.exports = registerRoute;