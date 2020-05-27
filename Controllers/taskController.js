//Node Modules
const fs = require('fs');
//npm Modules
const formidable = require('formidable');
//My Modules
const Task = require('../Models/Task');


const index = function (request, response, next) {

    if (request.session.isLogin !== true) {
        return response.redirect('/login');
    }
    Task.find().then((data, error) => {
        response.render('index', { tasks: data });
    })
};

const saveTask = function (request, response, next) {
    const form = new formidable.IncomingForm();
    form.parse(request, function (err, data, files) {

        console.log(data);

        const task = new Task({ title: data.title, body: data.body, status: data.status, dueDate: data.dueDate });
        task.save(function (error, currentTask) {

            let oldpath = files.image.path;
            let newpath = `public/taskImages/${currentTask._id}.png`;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;

            });
        });
        response.redirect('/');
    });

};

const setStatus = function (request, response, next) {
    let taskId = request.params.taskId;
    Task.findById(taskId).then((task) => {
        task.status = request.params.status;
        task.save();

        response.redirect('/');
    });
}

const deleteTask = function (request, response, next) {
    let taskId = request.params.taskId;
    Task.findById(taskId).then((task) => {
        task.remove();

        fs.unlink(`public/taskImages/${taskId}.png`, () => {
            response.redirect('/');
        });
    });
}

//post
const login = function (request, response, next) {
    // console.log();
    const form = new formidable.IncomingForm();
    form.parse(request, function (err, data) {
        let { username, password } = data;

        if (username === 'admin' && password === 'admin') {
            request.session.isLogin = true;
        }
        response.redirect('/');

    });

}

module.exports = { index, saveTask, setStatus, deleteTask, login };