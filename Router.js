const express = require('express');
const router = express.Router();

let taskController = require('./Controllers/taskController');

router.get('/', function (request, response, next) {
    taskController.index(request, response, next);
});
router.post('/', function (request, response, next) {
    taskController.saveTask(request, response, next);
});
router.get('/setStatus/:taskId/:status', function (request, response, next) {
    taskController.setStatus(request, response, next);
});
router.get('/delete/:taskId', function (request, response, next) {
    taskController.deleteTask(request, response, next);
});
router.get('/login', (_, response) => { response.render('loginForm') })
router.post('/login', (request, response, next) => { taskController.login(request, response, next) })
module.exports = router;