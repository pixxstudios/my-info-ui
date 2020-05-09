const express = require('express');
require('./db.config');

const {
    userRoutes
} = require('./routes/routes');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('hey');
});

app.listen(9001, () => {
    console.log('Listening at port 9001');
});