//Node Modules
const fs = require('fs');
//npm Modules
const formidable = require('formidable');
//My Modules
const Task = require('../Models/Task');

const index = function (request, respone, next) {
    console.log(request.session);

    if (request.session.views) {
        request.session.views++
        respone.setHeader('Content-Type', 'text/html')
        respone.write('<p>views: ' + request.session.views + '</p>')
        respone.write('<p>expires in: ' + (request.session.cookie.maxAge / 1000) + 's</p>')
        respone.end()
    } else {
        request.session.views = 1
        respone.end('welcome to the session demo. refresh!')
    }

    // Task.find().then((data, error) => {
    //     respone.render('index', { tasks: data });
    // })
};

const saveTask = function (request, respone, next) {
    let data = request.body;
    const form = new formidable.IncomingForm();
    form.parse(request, function (err, data, files) {

        const task = new Task({ title: data.title, body: data.body, status: data.status, dueDate: data.dueDate });
        task.save(function (error, currentTask) {

            let oldpath = files.image.path;
            let newpath = `public/taskImages/${currentTask._id}.png`;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                // respone.redirect('/');
            });
        });
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

        fs.unlink(`public/taskImages/${taskId}.png`, () => {
            respone.redirect('/');
        });
    });
}

module.exports = { index, saveTask, setStatus, deleteTask };