const index = function (request, respone, next) {
    respone.render('index', { msg: "Welcome!" });
};

module.exports = { index };