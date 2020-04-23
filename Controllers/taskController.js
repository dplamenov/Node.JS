const Task = require('../Models/Task');

const index = function (request, respone, next) {
    Task.find().then((data, error) => {
        respone.render('index', { tasks: data });
    })
};

const saveTask = function (request, respone, next) {
    let data = request.body;
    let task = new Task({ title: data.title, body: data.body, status: data.status, dueDate: data.dueDate });

    task.save(function (error, taks) {
        respone.redirect('/');
    });
};

const setStatus = function (request, respone, next) {
    let taskId = request.params.taskId;
    Task.findById(taskId).then((task) => {
        task.status = request.params.status;
        task.save();

        respone.redirect('/');
    });
}

const deleteTask = function (request, respone, next) {
    let taskId = request.params.taskId;

    Task.findById(taskId).then((task) => {
        task.remove();
        respone.redirect('/');
    });
}

module.exports = { index, saveTask, setStatus, deleteTask };