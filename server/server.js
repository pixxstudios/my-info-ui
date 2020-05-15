const express = require('express');
require('./db.config');

const {
    loginRoute,
    registerRoute
} = require('./routes/routes');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(loginRoute);
app.use(registerRoute);

app.get('/', (req, res) => {
    res.send('hey');
});

app.use('*', () => {
    res.status(404).send('invalid url')
});

app.listen(9001, () => {
    console.log('Listening at port 9001');
});