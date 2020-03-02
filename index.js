const express = require('express');
const application = express();

application.get('/', function (request, respone, next) {
    respone.send('Hi!');
});

application.listen(8080);