const express = require('express');
const db = require('./db.config');

// console.log('db ', db);

const {
    userRoutes
} = require('./routes/routes');

const app = express();

app.get('/', (req, res) => {
    res.send('hey');
});

app.use(userRoutes);

app.listen(9001, () => {
    console.log('Listening at port 9001');
});