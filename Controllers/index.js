const Task = require('../Models/Task');

const index = function (request, respone, next, database) {

    Task.find().then((data) => {
        respone.render('index', { tasks: data });
    });
};

const saveTask = function (request, respone, next, database) {
    let data = request.body;
    let task = new Task({ title: data.title, body: data.body, status: data.status, dueDate: data.dueDate });

    task.save(function (error, taks) {
        respone.redirect('/');
    });
};

const editTask = function (request, respone, next, database) {
    let taskId = Number(request.params.task_id);
    let sqlGetCurrentTask = "SELECT * FROM `tasks` WHERE `task_id` = ?";

    database.query(sqlGetCurrentTask, [taskId], function (err, result) {
        if (err) throw err;
        if (result.length === 1) {
            respone.render('editTaskForm', {
                taskId: result[0].task_id,
                taskTitle: result[0].task_title,
                taskBody: result[0].task
            });
        } else {
            respone.render('error', {
                error: 'Some database error'
            })
        }
    });
}

module.exports = { index, saveTask, editTask };