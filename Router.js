const express = require('express');
const router = express.Router();

let taskController = require('./Controllers/taskController.js');
let userController = require('./Controllers/userController.js');

router.get('/', function (request, response) {

    taskController.index(request, response);
});
router.post('/', function (request, response) {
    taskController.saveTask(request, response);
});
router.get('/setStatus/:taskId/:status', function (request, response) {
    taskController.setStatus(request, response);
});
router.get('/delete/:taskId', function (request, response) {
    taskController.deleteTask(request, response);
});
router.get('/login', (request, response) => { if (request.session.isLogin) { return response.redirect('/') } response.render('loginForm') });
router.post('/login', (request, response) => { userController.login(request, response) });
router.get('/register', (request, response) => { if (request.session.isLogin) { return response.redirect('/') } response.render('registerForm') })
router.post('/register', (request, response) => { userController.register(request, response) })
router.get('/logout', (request, response) => { request.session.isLogin = false; return response.redirect('/') });
module.exports = router;