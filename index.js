const express = require('express');
const application = express();
const router = require('./Router');

application.set('views', './views') // specify the views directory
application.set('view engine', 'twig') // register the template engine

application.use(router);


application.listen(8080);