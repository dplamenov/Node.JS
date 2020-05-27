const config = {};

config.session = {
    maxAge: 60 * 60 * 1000
}

config.bcrypt = { saltRounds: 13 };


module.exports = config;