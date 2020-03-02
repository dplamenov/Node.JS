const express = require('express');
var bodyParser = require('body-parser');

const application = express();
const router = require('./Router');

application.set('views', './Views');
application.set('view engine', 'twig');

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
application.use(router);


application.listen(8080);