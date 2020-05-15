require('dotenv').config();

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../schemas/schemas');

const jwtOptions = {};