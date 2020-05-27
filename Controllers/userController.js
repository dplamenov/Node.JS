const formidable = require('formidable');
const bcrypt = require('bcrypt');
// const config = rq
const User = require('../Models/User');

const login = function (request, response) {
    const form = new formidable.IncomingForm();
    form.parse(request, function (_, data) {
        const { username, password } = data;
        User.find().then(function (data) {

            let bcryptResult;
            for (let user of data) {
                if (user.username === username && user.username !== '') {
                    bcryptResult = bcrypt.compareSync(password, user.password);
                }
            }

            request.session.isLogin = bcryptResult;
            response.redirect('/');
        });
    });
}

const register = function (request, response) {
    const form = new formidable.IncomingForm();
    form.parse(request, function (_, data) {
        const { username, password } = data;
        bcrypt.hash(password, 14, function (err, hash) {
            let user = new User({ username, password: hash });
            user.save(function () {
                response.redirect('/');
            });
        });
    });
}


module.exports = { login, register };