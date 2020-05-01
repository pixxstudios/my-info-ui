const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hey');
});

app.listen(9001, () => {
    console.log('Listening at port 9001');
});