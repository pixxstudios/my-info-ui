require('dotenv').config();

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {
    User
} = require('../schemas/schemas');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('token'),
    secretOrKey: process.env.TOKEN_SECRET
};

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