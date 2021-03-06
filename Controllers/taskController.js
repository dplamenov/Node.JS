//Node Modules
const fs = require('fs');
//npm Modules
const formidable = require('formidable');
//My Modules
const Task = require('../Models/Task');


const index = function (request, response) {

    if (request.session.isLogin !== true) {
        return response.redirect('/login');
    }
    Task.find().then((data, _) => {
        response.render('index', { tasks: data });
    })
};

const saveTask = function (request, response) {
    const form = new formidable.IncomingForm();
    form.parse(request, function (_, data, files) {

        console.log(data);

        const task = new Task({ title: data.title, body: data.body, status: data.status, dueDate: data.dueDate });
        task.save(function (_, currentTask) {

            let oldpath = files.image.path;
            let newpath = `public/taskImages/${currentTask._id}.png`;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;

            });
        });
        response.redirect('/');
    });

};

const setStatus = function (request, response) {
    let taskId = request.params.taskId;
    Task.findById(taskId).then((task) => {
        task.status = request.params.status;
        task.save();

        response.redirect('/');
    });
}

const deleteTask = function (request, response) {
    let taskId = request.params.taskId;
    Task.findById(taskId).then((task) => {
        task.remove();

        fs.unlink(`public/taskImages/${taskId}.png`, () => {
            response.redirect('/');
        });
    });
}



module.exports = { index, saveTask, setStatus, deleteTask };