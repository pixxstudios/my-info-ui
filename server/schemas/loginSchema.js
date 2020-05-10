const mongoose = requrie('mongoose');

const loginSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Login', loginSchema);