const fileUploadRoute = require('express').Router();

fileUploadRoute.post('/fileupload', (req, res) => {
    res.send('fileUploadRoute');
});

module.exports = fileUploadRoute;