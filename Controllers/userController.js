const formidable = require('formidable');
const User = require('../Models/User');

const login = function (request, response, next) {
    const form = new formidable.IncomingForm();
    form.parse(request, function (err, data) {
        let { username, password } = data;

        if (username === 'admin' && password === 'admin') { //todo use database
            request.session.isLogin = true;
        }
        response.redirect('/');
    });
}

const register = function (request, response) {
    const form = new formidable.IncomingForm();
}


module.exports = { login, register };