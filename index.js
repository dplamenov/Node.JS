const express = require('express');
var bodyParser = require('body-parser');

const application = express();
const router = require('./Router');

application.set('views', './Views') // specify the views directory
application.set('view engine', 'twig') // register the template engine
application.use(bodyParser.json()); // support json encoded bodies
application.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
application.use(router);


application.listen(8080);