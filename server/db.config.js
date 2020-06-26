require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false });

const db = mongoose.connection;

db.on('error', () => console.error('DB error'));

module.exports = db;
