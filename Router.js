const express = require('express');
const router = express.Router();

let taskController = require('./Controllers/taskController');

router.get('/', function (request, respone, next) {
    taskController.index(request, respone, next);
});
router.post('/', function (request, respone, next) {

    taskController.saveTask(request, respone, next);
});
router.get('/setStatus/:taskId/:status', function (request, respone, next) {
    taskController.setStatus(request, respone, next);
});
router.get('/delete/:taskId', function (request, respone, next) {
    taskController.deleteTask(request, respone, next);
});
module.exports = router;