const express = require('express');
const bodyParser = require('body-parser');

const application = express();
const router = require('./Router');
const database = require('./Database');

application.set('views', './Views');
application.set('view engine', 'twig');

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
application.use(router);




application.listen(8080, () => {
    console.log(`Server started at port: 8080`);
});