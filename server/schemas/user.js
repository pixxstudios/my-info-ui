const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String }
});

module.exports = mongoose.model('User', userSchema);