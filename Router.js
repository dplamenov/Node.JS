const express = require('express');
const router = express.Router();

let indexController = require('./Controllers/index');

router.get('/', function (request, respone, next) {
    indexController.index(request, respone, next);
});
router.post('/', function (request, respone, next) {
    indexController.saveTask(request, respone, next);
});
module.exports = router;