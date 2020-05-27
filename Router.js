const express = require('express');
const router = express.Router();

let taskController = require('./Controllers/taskController.js');
let userController = require('./Controllers/userController.js');

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
router.get('/login', (request, response) => { if (request.session.isLogin) { return response.redirect('/') } response.render('loginForm') })
router.post('/login', (request, response, next) => { userController.login(request, response, next) })
module.exports = router;