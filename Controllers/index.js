const fs = require('fs');

const index = function (request, respone, next, database) {
    database.query('SELECT * FROM `tasks`', function (err, result) {
        if (err) {
            throw err;
        }
        respone.render('index', {tasks: result});
    })
};

const saveTask = function (request, respone, next) {
    let data = request.body;
    fs.appendFile('tasks.txt', `${data.title} - ${data.body}\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
        respone.redirect("/");
    });
};

module.exports = { index, saveTask };