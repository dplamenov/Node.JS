const express = require('express');
const bodyParser = require('body-parser');
const application = express();
const router = require('./Router');
const session = require('express-session')
const _port = 8080;

const { session: sessionConfig } = require('./config');
// console.log(sessionConfig);
application.set('views', './Views');
application.set('view engine', 'twig');
application.use(express.static('./public'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));

application.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,

    cookie: { secure: false, maxAge: sessionConfig.maxAge }
}))


application.use(router);

application.listen(_port, () => {
    console.log(`Server started at port: ${_port}`);
}); 
