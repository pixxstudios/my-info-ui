require('dotenv').config();

const passport = require('passport');
const bcrypt = require('bcrypt');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {
    User
} = require('../schemas/schemas');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('token'),
    secretOrKey: process.env.TOKEN_SECRET
};

const localOptions = {
    usernameField: 'email'
};

// local strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email }, function(err, user) {
        if (err) { return(done(err)); }

        if (!user) {
            return done(null, false, {
                message: 'Email not found'
            });
        }

        bcrypt.compare(password, user.password)
        .then(passwordMatch => {
            if (passwordMatch) {
                return done(null, user);
            }

            return done(null, false, {
                message: 'Incorrect password'
            });
        });
        // compare passwords
    });
});

// jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(
            payload.id
        ,
        function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
});

passport.use(jwtLogin);
passport.use(localLogin);