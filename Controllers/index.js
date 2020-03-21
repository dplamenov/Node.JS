const index = function (request, respone, next, database) {
    database.query('SELECT * FROM `tasks`', function (err, result) {
        if (err) {
            throw err;
        }
        respone.render('index', { tasks: result });
    })
};

const saveTask = function (request, respone, next, database) {
    let data = request.body;
    let sql = "INSERT INTO `tasks` (`task_title`, `task`) VALUES (?)";

    database.query(sql, [[data.title, data.body]], function (err, result) {
        if (err) throw err;
        console.log('Saved!');
        respone.redirect("/");
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