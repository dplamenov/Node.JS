const express = require('express');
const database = require('./Database');
const router = express.Router();

let indexController = require('./Controllers/index');

router.get('/', function (request, respone, next) {
    indexController.index(request, respone, next, database);
});
router.post('/', function (request, respone, next) {
    indexController.saveTask(request, respone, next, database);
});
module.exports = router;