const formidable = require('formidable');

const login = function (request, response, next) {
    // console.log();
    const form = new formidable.IncomingForm();
    form.parse(request, function (err, data) {
        let { username, password } = data;

        if (username === 'admin' && password === 'admin') {
            request.session.isLogin = true;
        }
        response.redirect('/');

    });

}


module.exports = { login };