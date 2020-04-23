const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tasks = mongoose.model('task', { name: String });
tasks.find().then(task => {
    console.log(task);
})

const application = express();
const router = require('./Router');

application.set('views', './Views');
application.set('view engine', 'twig');
application.use(express.static('./public'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
application.use(router);


application.listen(8080, () => {
    console.log(`Server started at port: 8080`);
}); 