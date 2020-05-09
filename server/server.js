const express = require('express');

const {
    userRoutes
} = require('./routes/routes');

const app = express();

app.use(userRoutes);

app.listen(9001, () => {
    console.log('Listening at port 9001');
});