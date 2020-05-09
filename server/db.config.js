require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => console.error('DB error'));

module.exports = db;
