const express = require('express');
const application = express();
application.set('views', './views') // specify the views directory
application.set('view engine', 'twig') // register the template engine
application.get('/', function (request, respone, next) {
    respone.render('index', { msg: "Welcome!" });
});

application.listen(8080);