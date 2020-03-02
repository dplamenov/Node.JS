let fs = require('fs');
const index = function (request, respone, next) {
    fs.readFile('tasks.txt', function (err, data) {
        data = data.toString('utf8').split('\n');

        let tasks = [];

        data.forEach(function (el) {
            let [title, body] = el.split(' - ');
            let currentObj = { title, body };
            tasks.push(currentObj);
        });
        respone.render('index', { tasks });
    });
};

const saveTask = function (request, respone, next) {
    let data = request.body;
    fs.appendFile('tasks.txt', `${data.title} - ${data.body}\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
};

module.exports = { index, saveTask };