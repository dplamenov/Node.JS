const mongoose = require('../Database');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
}, {
    versionKey: false
});

const user = mongoose.model('User', userSchema);

module.exports = user;