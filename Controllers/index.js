const fs = require('fs');

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

module.exports = { index, saveTask };